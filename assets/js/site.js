(function () {
  const dict = {
    en: {
      "meta.title": "Ferdiana Hoti — Communication",
      "brand.descriptor": "Communication",
      "nav.practice": "Practice",
      "nav.sessions": "Sessions",
      "nav.approach": "Approach",
      "nav.book": "Book",
      "nav.cta": "Book a session",
      "nav.menu": "Menu",
      "hero.kicker": "Social scientist · Antwerp",
      "hero.title": "Make complex work <em>clear enough</em> to fund, teach, and trust.",
      "hero.lede": "Dr. Ferdiana Hoti helps researchers, universities, and teams turn a serious idea into language a funder, a room, or the public can use.",
      "hero.primary": "Book a 1:1",
      "hero.secondary": "Plan a training",
      "hero.fact1": "Eight years across research, teaching, and industry communication.",
      "hero.fact2": "Grants, talks, and explanations for people outside the specialty.",
      "hero.fact3": "Sessions in English and Albanian, and in Dutch when the room needs it.",
      "hero.role": "PhD, University of Antwerp",
      "hero.room": "Training, in the room",
      "film.kicker": "From a training",
      "film.title": "Greet the fear of public speaking.",
      "film.lede": "A sequence from the workshop. It plays in the page. Sound starts only when you press play, and on a phone it stays inline.",
      "film.play": "Play the sequence",
      "disc.1": "Grant narratives",
      "disc.2": "Public speaking",
      "disc.3": "Science communication",
      "disc.4": "Risk and uncertainty",
      "disc.5": "Workshops",
      "disc.6": "Feedback",
      "disc.7": "AI, explained with care",
      "practice.kicker": "The practice",
      "practice.title": "A clarity practice for people with serious work.",
      "practice.p1": "Ferdiana is a social scientist. Her PhD at the University of Antwerp studied how uncertainty is communicated when the stakes are high. She has carried that discipline through a research centre, a university classroom, industry learning, and a public practice in science communication.",
      "practice.p2": "The brief is steady: researchers need ideas to become funded projects, and complex work needs to stay accurate once it leaves the specialist circle. A session finds the sentence that matters, then the structure that can carry it.",
      "practice.exp": "Also in the background: Communication and Learning Manager at Umicore, PhD researcher at SCK CEN, and founder of the outreach series Stand-Up Scientist. She is Communications Officer and a board member of the Society for Risk Analysis Europe.",
      "cred.1.title": "PhD, Social Sciences",
      "cred.1.text": "University of Antwerp. Thesis on communicating uncertainty in radiological risk situations.",
      "cred.2.title": "Hogeschool PXL",
      "cred.2.text": "Researcher and grant facilitator, helping ideas become fundable projects.",
      "cred.3.title": "University teaching",
      "cred.3.text": "Assistant professor at UNI — Universum International College, and former teaching assistant at Antwerp.",
      "cred.4.title": "SRA Europe",
      "cred.4.text": "Communications Officer and early-career board member for a European risk-analysis society.",
      "quote.text": "“This workshop helped me reconnect with a part of myself that has always been there: communicating with clarity, confidence, and authenticity.”",
      "quote.by": "Marigona Kozmaqi · workshop participant",
      "sessions.kicker": "Sessions",
      "sessions.title": "Two ways to work together.",
      "sessions.lede": "A private hour for one project, or a training room for a team or the next open group.",
      "offer1.kicker": "Private",
      "offer1.title": "One-to-one consultation",
      "offer1.length": "60 minutes · online or in Antwerp",
      "offer1.text": "You bring one live piece of work. You leave with language you can use the same week.",
      "offer1.m1": "A grant, project, or funding narrative",
      "offer1.m2": "A talk, lecture, defense, or pitch",
      "offer1.m3": "A draft, slide deck, or message for a board or the public",
      "offer1.fit": "For researchers and professionals preparing one high-stakes conversation.",
      "offer1.cta": "Request a 1:1",
      "offer2.kicker": "Group",
      "offer2.title": "Training session",
      "offer2.length": "Half day, or shaped around the group",
      "offer2.text": "A practical room for speaking, explaining, and holding an audience that does not share your vocabulary.",
      "offer2.m1": "Public speaking and presence",
      "offer2.m2": "Science communication and presentations",
      "offer2.m3": "Risk, uncertainty, feedback, and AI explained without losing accuracy",
      "offer2.fit": "For research groups, universities, and mixed professional teams. Open seats are confirmed personally.",
      "offer2.cta": "Request a training",
      "who.kicker": "Who it is for",
      "who.title": "People who cannot afford a muddy sentence.",
      "who.1.title": "Researchers",
      "who.1.text": "Grants, talks, defenses, and papers that have to travel outside the lab.",
      "who.2.title": "Universities and institutes",
      "who.2.text": "Research offices, faculties, and teams who explain their work to funders and the public.",
      "who.3.title": "Professional rooms",
      "who.3.text": "Architects, clinicians, engineers, founders, and anyone presenting beyond their field.",
      "who.4.title": "Public explanation",
      "who.4.text": "Topics that carry risk, change, or new tools, including how AI is described to non-specialists.",
      "method.kicker": "Approach",
      "method.title": "How a session moves.",
      "method.1.title": "You send the brief",
      "method.1.text": "The project, the audience, and the date that matters.",
      "method.2.title": "The format comes back",
      "method.2.text": "Length, shape, and fee are confirmed once the brief is clear.",
      "method.3.title": "You meet",
      "method.3.text": "Online, in Antwerp, or in the room where the team already works.",
      "method.4.title": "You leave with language",
      "method.4.text": "A structure, the sentence that carries the work, and a way to deliver it.",
      "book.kicker": "Booking",
      "book.title": "Tell her what you are <em>preparing</em>.",
      "book.lede": "A 1:1, a seat in the next open training, or a session built for your team. She confirms time and format personally.",
      "book.note": "Antwerp · online · on site. Independent practice. Institutional names on this site describe experience, and are not endorsements.",
      "form.consult": "1:1 consultation",
      "form.consult.hint": "One project. One hour. A structure you can use immediately.",
      "form.open": "Next open training",
      "form.open.hint": "Request a seat. The date is confirmed with you, never assumed.",
      "form.team": "Private team training",
      "form.team.hint": "A session designed around your group, topic, and room.",
      "form.name": "Name",
      "form.email": "Email",
      "form.org": "Organisation",
      "form.org.ph": "University, institute, or team",
      "form.preparing": "What you are preparing",
      "form.opt.grant": "A grant or funding narrative",
      "form.opt.talk": "A talk, lecture, or defense",
      "form.opt.public": "A message for a public or mixed audience",
      "form.opt.team": "A team training",
      "form.opt.other": "Something else",
      "form.lang": "Session language",
      "form.lang.en": "English",
      "form.lang.sq": "Albanian",
      "form.lang.nl": "Dutch",
      "form.format": "Format",
      "form.format.online": "Online",
      "form.format.antwerp": "In Antwerp",
      "form.format.onsite": "On site, with the team",
      "form.date": "Preferred date",
      "form.message": "The brief",
      "form.message.ph": "Who needs to understand this, and by when?",
      "form.submit": "Request this session",
      "form.sending": "Sending…",
      "form.another": "Send another request",
      "success.title": "Request received.",
      "success.body": "Ferdiana confirms the time, format, and fee by email. Keep an eye on the address you entered.",
      "err.validation": "Add your name, a valid email, and a short brief of at least a sentence.",
      "err.server": "The request could not be saved. Please try again in a moment.",
      "err.network": "The request did not go through. Check that the site is open through the local server and try again."
    },
    sq: {
      "meta.title": "Ferdiana Hoti — Komunikim",
      "brand.descriptor": "Komunikim",
      "nav.practice": "Praktika",
      "nav.sessions": "Seancat",
      "nav.approach": "Qasja",
      "nav.book": "Rezervo",
      "nav.cta": "Rezervo një seancë",
      "nav.menu": "Menyja",
      "hero.kicker": "Shkencëtare sociale · Antwerp",
      "hero.title": "Bëje punën komplekse <em>mjaft të qartë</em> për t’u financuar, mësuar dhe besuar.",
      "hero.lede": "Dr. Ferdiana Hoti ndihmon studiues, universitete dhe ekipe ta kthejnë një ide serioze në gjuhë që një financues, një sallë ose publiku mund ta përdorë.",
      "hero.primary": "Rezervo një 1:1",
      "hero.secondary": "Planifiko një trajnim",
      "hero.fact1": "Tetë vjet në komunikimin e kërkimit, mësimdhënies dhe industrisë.",
      "hero.fact2": "Grante, fjalime dhe shpjegime për njerëz jashtë specialitetit.",
      "hero.fact3": "Seanca në anglisht dhe shqip, dhe në holandisht kur salla e kërkon.",
      "hero.role": "PhD, Universiteti i Antwerpit",
      "hero.room": "Trajnim, në sallë",
      "film.kicker": "Nga një trajnim",
      "film.title": "Përshëndetu me frikën e të folurit publik.",
      "film.lede": "Një sekuencë nga punëtoria. Luhet këtu në faqe. Zëri nis vetëm kur shtypni play, dhe në telefon mbetet në faqe.",
      "film.play": "Luaj sekuencën",
      "disc.1": "Narrativa granesh",
      "disc.2": "Të folur publik",
      "disc.3": "Komunikim i shkencës",
      "disc.4": "Rrezik dhe pasiguri",
      "disc.5": "Punëtori",
      "disc.6": "Feedback",
      "disc.7": "AI, e shpjeguar me kujdes",
      "practice.kicker": "Praktika",
      "practice.title": "Një praktikë qartësie për njerëz me punë serioze.",
      "practice.p1": "Ferdiana është shkencëtare sociale. Doktoratura e saj në Universitetin e Antwerpit studioi si komunikohet pasiguria kur pesha e vendimit është e lartë. Atë disiplinë e ka bartur në një qendër kërkimore, në klasë universiteti, në mësimin industrial dhe në një praktikë publike të komunikimit të shkencës.",
      "practice.p2": "Detyra mbetet e njëjtë: studiuesit duan që idetë të bëhen projekte të financuara, dhe puna komplekse duhet të mbetet e saktë edhe kur del jashtë rrethit të specialistëve. Seanca gjen fjalinë që ka peshë, pastaj strukturën që mund ta mbajë.",
      "practice.exp": "Në sfond janë edhe: Menaxhere e Komunikimit dhe Mësimit në Umicore, studiuese e doktoraturës në SCK CEN, dhe themeluese e serisë Stand-Up Scientist. Është zyrtare e komunikimit dhe anëtare bordi e Society for Risk Analysis Europe.",
      "cred.1.title": "PhD, Shkenca sociale",
      "cred.1.text": "Universiteti i Antwerpit. Tezë mbi komunikimin e pasigurisë në situata të rrezikut radiologjik.",
      "cred.2.title": "Hogeschool PXL",
      "cred.2.text": "Studiuese dhe lehtësuese grantesh, që idetë të bëhen projekte të financueshme.",
      "cred.3.title": "Mësimdhënie universitare",
      "cred.3.text": "Profesore asistente në UNI — Universum International College, dhe ish-asistente në Antwerp.",
      "cred.4.title": "SRA Europe",
      "cred.4.text": "Zyrtare e komunikimit dhe përfaqësuese e studiuesve të rinj në një shoqatë evropiane të analizës së rrezikut.",
      "quote.text": "“Kjo punëtori më ndihmoi të rilidhem me një pjesë të vetes që ka qenë gjithmonë aty: komunikimin me qartësi, vetëbesim dhe autenticitet.”",
      "quote.by": "Marigona Kozmaqi · pjesëmarrëse në punëtori",
      "sessions.kicker": "Seancat",
      "sessions.title": "Dy mënyra për të punuar së bashku.",
      "sessions.lede": "Një orë private për një projekt, ose një sallë trajnimi për ekipin apo grupin e ardhshëm të hapur.",
      "offer1.kicker": "Private",
      "offer1.title": "Konsultë një-me-një",
      "offer1.length": "60 minuta · online ose në Antwerp",
      "offer1.text": "Sillni një punë të gjallë. Largoheni me gjuhë që mund ta përdorni të njëjtën javë.",
      "offer1.m1": "Një grant, projekt ose narrativë financimi",
      "offer1.m2": "Një fjalim, ligjëratë, mbrojtje ose pitch",
      "offer1.m3": "Një draft, prezantim ose mesazh për bordin apo publikun",
      "offer1.fit": "Për studiues dhe profesionistë që përgatisin një bisedë me peshë.",
      "offer1.cta": "Kërko një 1:1",
      "offer2.kicker": "Grup",
      "offer2.title": "Seancë trajnimi",
      "offer2.length": "Gjysmë dite, ose e ndërtuar rreth grupit",
      "offer2.text": "Një sallë praktike për të folur, për të shpjeguar dhe për të mbajtur një audiencë që nuk e ndan fjalorin tuaj.",
      "offer2.m1": "Të folur publik dhe prezencë",
      "offer2.m2": "Komunikim i shkencës dhe prezantime",
      "offer2.m3": "Rrezik, pasiguri, feedback dhe AI e shpjeguar pa e humbur saktësinë",
      "offer2.fit": "Për grupe kërkimore, universitete dhe ekipe të përziera. Vendet e hapura konfirmohen personalisht.",
      "offer2.cta": "Kërko një trajnim",
      "who.kicker": "Për kë është",
      "who.title": "Njerëz që s’mund të lejojnë një fjali të turbullt.",
      "who.1.title": "Studiues",
      "who.1.text": "Grante, fjalime, mbrojtje dhe punime që duhet të udhëtojnë jashtë laboratorit.",
      "who.2.title": "Universitete dhe institute",
      "who.2.text": "Zyra kërkimi, fakultete dhe ekipe që ia shpjegojnë punën financuesve dhe publikut.",
      "who.3.title": "Salla profesionale",
      "who.3.text": "Arkitektë, klinicistë, inżynierë, themelues dhe kushdo që flet jashtë fushës së vet.",
      "who.4.title": "Shpjegim publik",
      "who.4.text": "Tema me rrezik, ndryshim ose mjete të reja, përfshirë mënyrën si përshkruhet AI për jo-specialistë.",
      "method.kicker": "Qasja",
      "method.title": "Si ecën një seancë.",
      "method.1.title": "Dërgoni brief-in",
      "method.1.text": "Projektin, audiencën dhe datën që ka rëndësi.",
      "method.2.title": "Formati kthehet",
      "method.2.text": "Kohëzgjatja, forma dhe tarifa konfirmohen pasi brief-i është i qartë.",
      "method.3.title": "Takoheni",
      "method.3.text": "Online, në Antwerp, ose në sallën ku ekipi punon tashmë.",
      "method.4.title": "Largoheni me gjuhë",
      "method.4.text": "Një strukturë, fjalia që e mban punën, dhe një mënyrë për ta dhënë.",
      "book.kicker": "Rezervimi",
      "book.title": "Tregojini çfarë po <em>përgatitni</em>.",
      "book.lede": "Një 1:1, një vend në trajnimin e ardhshëm të hapur, ose një seancë e ndërtuar për ekipin tuaj. Kohën dhe formatin i konfirmon vetë.",
      "book.note": "Antwerp · online · në vend. Praktikë e pavarur. Emrat e institucioneve përshkruajnë përvojën, jo një sponsorizim.",
      "form.consult": "Konsultë 1:1",
      "form.consult.hint": "Një projekt. Një orë. Një strukturë që përdoret menjëherë.",
      "form.open": "Trajnimi i ardhshëm i hapur",
      "form.open.hint": "Kërkoni një vend. Data konfirmohet me ju.",
      "form.team": "Trajnim privat për ekip",
      "form.team.hint": "Një seancë e ndërtuar rreth grupit, temës dhe sallës suaj.",
      "form.name": "Emri",
      "form.email": "Email",
      "form.org": "Organizata",
      "form.org.ph": "Universitet, institut ose ekip",
      "form.preparing": "Çfarë po përgatitni",
      "form.opt.grant": "Një narrativë granti ose financimi",
      "form.opt.talk": "Një fjalim, ligjëratë ose mbrojtje",
      "form.opt.public": "Një mesazh për publik të përzier",
      "form.opt.team": "Një trajnim ekipi",
      "form.opt.other": "Diçka tjetër",
      "form.lang": "Gjuha e seancës",
      "form.lang.en": "Anglisht",
      "form.lang.sq": "Shqip",
      "form.lang.nl": "Holandisht",
      "form.format": "Formati",
      "form.format.online": "Online",
      "form.format.antwerp": "Në Antwerp",
      "form.format.onsite": "Në vend, me ekipin",
      "form.date": "Data e preferuar",
      "form.message": "Brief-i",
      "form.message.ph": "Kush duhet ta kuptojë këtë, dhe deri kur?",
      "form.submit": "Dërgo kërkesën",
      "form.sending": "Duke u dërguar…",
      "form.another": "Dërgo një kërkesë tjetër",
      "success.title": "Kërkesa u mor.",
      "success.body": "Ferdiana e konfirmon kohën, formatin dhe tarifën me email. Mbani nën vëzhgim adresën që shënuat.",
      "err.validation": "Shkruani emrin, një email të vlefshëm dhe një brief të shkurtër, të paktën një fjali.",
      "err.server": "Kërkesa nuk u ruajt. Provoni përsëri pas një çasti.",
      "err.network": "Kërkesa nuk arriti. Hapeni faqen përmes serverit lokal dhe provoni përsëri."
    }
  };

  const form = document.querySelector("#book-form");
  if (!form) return;

  const header = document.querySelector(".header");
  const toggle = document.querySelector(".nav-toggle");
  const dateInput = form.querySelector('input[name="date"]');
  const errorEl = document.querySelector("#form-error");
  const successEl = document.querySelector("#success");
  const refEl = document.querySelector("#ref");
  const submitBtn = form.querySelector('button[type="submit"]');

  if (dateInput) {
    const today = new Date();
    const iso = today.toISOString().slice(0, 10);
    dateInput.min = iso;
  }

  function apply(lang) {
    const pack = dict[lang] || dict.en;
    document.documentElement.lang = lang === "sq" ? "sq" : "en";
    document.title = pack["meta.title"];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = pack[el.getAttribute("data-i18n")];
      if (value == null) return;
      if (el.hasAttribute("data-i18n-html")) el.innerHTML = value;
      else el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const value = pack[el.getAttribute("data-i18n-placeholder")];
      if (value != null) el.setAttribute("placeholder", value);
    });
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    document.body.dataset.lang = lang;
    try { localStorage.setItem("fh-lang", lang); } catch (e) { /* ignore */ }
  }

  const saved = (() => {
    try { return localStorage.getItem("fh-lang"); } catch (e) { return null; }
  })();
  apply(saved === "sq" ? "sq" : "en");

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => apply(btn.getAttribute("data-lang")));
  });

  function t(key) {
    const lang = document.body.dataset.lang === "sq" ? "sq" : "en";
    return dict[lang][key] || dict.en[key] || "";
  }

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });

  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[data-session]").forEach((link) => {
    link.addEventListener("click", () => {
      const value = link.getAttribute("data-session");
      const input = form.querySelector('input[name="session"][value="' + value + '"]');
      if (input) input.checked = true;
    });
  });

  function showError(code) {
    errorEl.hidden = false;
    errorEl.textContent = t(code === "server" ? "err.server" : code === "network" ? "err.network" : "err.validation");
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    errorEl.hidden = true;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || String(data.name).trim().length < 2 || !data.email || String(data.message || "").trim().length < 12) {
      showError("validation");
      return;
    }
    submitBtn.disabled = true;
    submitBtn.textContent = t("form.sending");
    const now = new Date();
    const stamp = String(now.getFullYear()).slice(2)
      + String(now.getMonth() + 1).padStart(2, "0")
      + String(now.getDate()).padStart(2, "0");
    const id = "FH-" + stamp + "-" + Math.random().toString(16).slice(2, 6).toUpperCase();
    try {
      const saved = JSON.parse(localStorage.getItem("fh-requests") || "[]");
      saved.push({ id, created: now.toISOString(), ...data });
      localStorage.setItem("fh-requests", JSON.stringify(saved));
    } catch (e) { /* the confirmation still shows */ }
    form.hidden = true;
    successEl.hidden = false;
    refEl.textContent = id;
    submitBtn.disabled = false;
    submitBtn.textContent = t("form.submit");
  });

  const reel = document.querySelector("#reel");
  const reelPlay = document.querySelector("#reel-play");
  if (reel && reelPlay) {
    const startReel = () => {
      reel.controls = true;
      reelPlay.hidden = true;
      const pending = reel.play();
      if (pending && typeof pending.catch === "function") {
        pending.catch(() => {
          reelPlay.hidden = false;
        });
      }
    };
    reelPlay.addEventListener("click", startReel);
    reel.addEventListener("ended", () => {
      reelPlay.hidden = false;
    });
  }

  document.querySelector("#another").addEventListener("click", () => {
    form.reset();
    form.hidden = false;
    successEl.hidden = true;
    submitBtn.disabled = false;
    submitBtn.textContent = t("form.submit");
    const first = form.querySelector('input[name="session"]');
    if (first) first.checked = true;
  });
})();
