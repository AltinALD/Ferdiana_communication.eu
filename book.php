<?php
declare(strict_types=1);

// Set an address to receive each request by email. Leave empty to keep requests in data/bookings.json only.
const NOTIFY_EMAIL = '';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method']);
    exit;
}

$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

if (!empty($data['company_website'])) {
    echo json_encode(['ok' => true, 'id' => 'FH-000000-0000']);
    exit;
}

$sessions = ['consult', 'training-open', 'training-team'];
$formats = ['online', 'antwerp', 'onsite'];
$langs = ['en', 'sq', 'nl'];
$topics = ['grant', 'talk', 'public', 'team', 'other'];

$session = (string)($data['session'] ?? '');
$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$organisation = trim((string)($data['organisation'] ?? ''));
$preparing = (string)($data['preparing'] ?? '');
$language = (string)($data['language'] ?? '');
$format = (string)($data['format'] ?? '');
$date = trim((string)($data['date'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

$valid = in_array($session, $sessions, true)
    && strlen($name) >= 2 && strlen($name) <= 80
    && filter_var($email, FILTER_VALIDATE_EMAIL)
    && strlen($email) <= 120
    && strlen($organisation) <= 120
    && in_array($preparing, $topics, true)
    && in_array($language, $langs, true)
    && in_array($format, $formats, true)
    && strlen($message) >= 12 && strlen($message) <= 2000
    && ($date === '' || preg_match('/^\d{4}-\d{2}-\d{2}$/', $date) === 1);

if (!$valid) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'validation']);
    exit;
}

$id = 'FH-' . date('ymd') . '-' . strtoupper(substr(bin2hex(random_bytes(2)), 0, 4));
$entry = [
    'id' => $id,
    'created' => date('c'),
    'session' => $session,
    'name' => $name,
    'email' => $email,
    'organisation' => $organisation,
    'preparing' => $preparing,
    'language' => $language,
    'format' => $format,
    'date' => $date,
    'message' => $message,
];

$dir = __DIR__ . DIRECTORY_SEPARATOR . 'data';
if (!is_dir($dir) && !mkdir($dir, 0755, true) && !is_dir($dir)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'server']);
    exit;
}

$path = $dir . DIRECTORY_SEPARATOR . 'bookings.json';
$fp = fopen($path, 'c+');
if ($fp === false) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'server']);
    exit;
}

flock($fp, LOCK_EX);
$existing = stream_get_contents($fp);
$list = json_decode($existing ?: '[]', true);
if (!is_array($list)) {
    $list = [];
}
$list[] = $entry;
rewind($fp);
ftruncate($fp, 0);
fwrite($fp, json_encode($list, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
fflush($fp);
flock($fp, LOCK_UN);
fclose($fp);

$mailed = false;
if (NOTIFY_EMAIL !== '' && filter_var(NOTIFY_EMAIL, FILTER_VALIDATE_EMAIL)) {
    $labels = [
        'consult' => '1:1 consultation',
        'training-open' => 'Next open training',
        'training-team' => 'Private team training',
    ];
    $body = "New session request {$id}\n\n"
        . 'Session: ' . ($labels[$session] ?? $session) . "\n"
        . "Name: {$name}\n"
        . "Email: {$email}\n"
        . "Organisation: {$organisation}\n"
        . "Preparing: {$preparing}\n"
        . "Language: {$language}\n"
        . "Format: {$format}\n"
        . "Preferred date: {$date}\n\n"
        . $message . "\n";
    $safeName = str_replace(["\r", "\n"], '', $name);
    $headers = "Content-Type: text/plain; charset=UTF-8\r\nReply-To: {$email}\r\n";
    $mailed = @mail(NOTIFY_EMAIL, "Session request {$id} — {$safeName}", $body, $headers);
}

echo json_encode(['ok' => true, 'id' => $id, 'mailed' => $mailed]);
