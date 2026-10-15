<?php
declare(strict_types=1);

$remote = $_SERVER['REMOTE_ADDR'] ?? '';
if (!in_array($remote, ['127.0.0.1', '::1'], true)) {
    http_response_code(404);
    exit('Not found');
}

$path = __DIR__ . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'bookings.json';
$list = [];
if (is_file($path)) {
    $decoded = json_decode((string)file_get_contents($path), true);
    if (is_array($decoded)) {
        $list = array_reverse($decoded);
    }
}

$labels = [
    'consult' => '1:1 consultation',
    'training-open' => 'Next open training',
    'training-team' => 'Private team training',
    'grant' => 'Grant or funding narrative',
    'talk' => 'Talk, lecture, or defense',
    'public' => 'Public or mixed audience',
    'team' => 'Team training',
    'other' => 'Something else',
    'en' => 'English',
    'sq' => 'Albanian',
    'nl' => 'Dutch',
    'online' => 'Online',
    'antwerp' => 'Antwerp',
    'onsite' => 'On site',
];

function h(?string $value): string
{
    return htmlspecialchars((string)$value, ENT_QUOTES, 'UTF-8');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Session requests — Ferdiana</title>
  <link rel="icon" href="assets/brand/mark.svg" type="image/svg+xml">
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body class="inbox-body">
  <main class="inbox">
    <header class="inbox-head">
      <a class="brand" href="index.html">
        <img src="assets/brand/mark.svg" width="42" height="42" alt="">
        <span class="brand-name">
          <strong>Ferdiana Hoti</strong>
          <small>Session requests</small>
        </span>
      </a>
      <p><?= count($list) ?> saved on this computer. This page opens only from localhost.</p>
    </header>
    <?php if (!$list): ?>
      <p class="inbox-empty">No requests yet. A booking from the site will appear here.</p>
    <?php else: ?>
      <div class="inbox-list">
        <?php foreach ($list as $item): ?>
          <article class="inbox-card">
            <header>
              <strong><?= h($item['id'] ?? '') ?></strong>
              <span><?= h($item['created'] ?? '') ?></span>
            </header>
            <h2><?= h($labels[$item['session'] ?? ''] ?? ($item['session'] ?? '')) ?></h2>
            <p class="inbox-person"><?= h($item['name'] ?? '') ?> · <?= h($item['email'] ?? '') ?></p>
            <dl>
              <div><dt>Organisation</dt><dd><?= h($item['organisation'] ?? '—') ?: '—' ?></dd></div>
              <div><dt>Preparing</dt><dd><?= h($labels[$item['preparing'] ?? ''] ?? ($item['preparing'] ?? '')) ?></dd></div>
              <div><dt>Language</dt><dd><?= h($labels[$item['language'] ?? ''] ?? '') ?></dd></div>
              <div><dt>Format</dt><dd><?= h($labels[$item['format'] ?? ''] ?? '') ?></dd></div>
              <div><dt>Date</dt><dd><?= h($item['date'] ?? '') ?: 'Flexible' ?></dd></div>
            </dl>
            <p class="inbox-message"><?= nl2br(h($item['message'] ?? '')) ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </main>
</body>
</html>
