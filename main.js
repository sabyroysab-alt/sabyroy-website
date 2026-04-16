/* ================================================================
   DR. SABY ROY — MAIN.JS
   Premium interactions powered by GSAP
================================================================ */

/* ──────────────────────────────────────────────────────────────
   SOCIAL MEDIA SVG ICONS  (official brand paths, 24×24 viewBox)
────────────────────────────────────────────────────────────── */
const ICONS = {
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>`,

  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>`,

  instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <defs><radialGradient id="ig-g" cx="30%" cy="107%" r="150%"><stop offset="0%" stop-color="#FDD770"/><stop offset="10%" stop-color="#FDD770"/><stop offset="25%" stop-color="#F59041"/><stop offset="50%" stop-color="#E5306C"/><stop offset="75%" stop-color="#BC2A8D"/><stop offset="100%" stop-color="#5B51D8"/></radialGradient></defs>
    <path fill="url(#ig-g)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>`,

  facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>`,

  youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
    <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>`,

  substack: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF6719" aria-hidden="true">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
  </svg>`,

  threads: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
    <path d="M19.59 13.197c-.117-3.732-2.441-5.862-6.178-5.886h-.054c-2.246 0-4.109.958-5.249 2.7l1.931 1.325c.858-1.302 2.208-1.58 3.318-1.58h.036c1.283.008 2.25.38 2.876 1.107.454.526.758 1.254.908 2.171-1.131-.193-2.354-.252-3.662-.178-3.676.214-6.04 2.357-5.888 5.337.077 1.511.813 2.813 2.072 3.672 1.068.73 2.441 1.09 3.867 1.013 1.885-.105 3.362-.82 4.392-2.124.772-.976 1.261-2.239 1.475-3.834.886.534 1.541 1.235 1.92 2.078.637 1.41.673 3.731-.685 5.091-1.188 1.189-2.868 1.703-5.238 1.719-2.629-.019-4.62-.863-5.917-2.506-1.207-1.525-1.832-3.73-1.856-6.551.024-2.822.649-5.026 1.856-6.551 1.297-1.643 3.288-2.487 5.917-2.506 2.645.019 4.677.872 6.041 2.537.68.831 1.194 1.877 1.529 3.111l2.265-.604c-.42-1.573-1.07-2.934-1.958-4.062C19.532 3.028 16.896 1.77 13.508 1.748h-.018c-3.382.022-5.98 1.285-7.727 3.752C4.15 7.448 3.38 10.146 3.356 13.5c.024 3.354.794 6.052 2.407 8 1.747 2.467 4.345 3.73 7.727 3.752h.018c3.012-.02 5.13-.806 6.879-2.555 2.183-2.183 2.116-5.28 1.397-7.083-.498-1.247-1.455-2.265-2.794-2.981l.6-.436zm-7.171 6.748c-1.61.09-3.28-.632-3.36-2.177-.059-1.137.809-2.408 3.428-2.56.3-.017.593-.026.882-.026.98 0 1.895.096 2.728.279-.31 3.882-2.103 4.403-3.678 4.484z"/>
  </svg>`,
};

/* ──────────────────────────────────────────────────────────────
   RENDER CONTENT FROM content.js
   All text on the site comes from CONTENT in content.js
────────────────────────────────────────────────────────────── */
function renderAll() {
  const C = CONTENT;

  // ── NAV ──
  document.getElementById('navLogo').textContent = 'SR';
  document.getElementById('navCta').textContent  = C.programme.cta_text;

  // ── HERO ──
  document.getElementById('heroEyebrow').textContent = C.hero.eyebrow;

  // Build headline with line-wrap animation spans
  const hedEl = document.getElementById('heroHed');
  hedEl.innerHTML = C.hero.headline.map(line =>
    `<span class="line-wrap"><span class="line">${line}</span></span>`
  ).join('');

  document.getElementById('heroSub').innerHTML  = C.hero.subtext;
  document.getElementById('heroCta').textContent = C.hero.cta;
  document.getElementById('heroNote').textContent = C.hero.form_note;

  // ── MISSION ──
  document.getElementById('missQuote').innerHTML = `"${C.mission.quote}"`;
  document.getElementById('missBody').textContent = C.mission.body;

  // ── STATS BAR (skipped if qual-ticker is present) ──
  const statsBar = document.getElementById('statsBar');
  if (statsBar && !statsBar.classList.contains('qual-ticker')) {
    statsBar.innerHTML = C.stats.map(s => `
      <div class="stat-item">
        <div class="stat-n"><span class="stat-counter" data-target="${s.number}">${s.number}</span><sup>${s.suffix}</sup></div>
        <p class="stat-l">${s.label}</p>
      </div>
    `).join('');
  }

  // ── ABOUT ──
  const aHed = document.getElementById('aboutHed');
  aHed.textContent = C.about.headline;

  document.getElementById('aboutLead').textContent = C.about.opening_quote;

  const parasEl = document.getElementById('aboutParas');
  parasEl.innerHTML = C.about.paragraphs.map(p => `<p>${p}</p>`).join('');

  const areasEl = document.getElementById('aboutAreas');
  areasEl.innerHTML = C.about.areas.map((a, i) => `
    <div class="area-row">
      <span class="area-i">0${i+1}</span>
      <span class="area-name">${a}</span>
    </div>
  `).join('');

  document.getElementById('aboutStatNum').innerHTML  = `${C.about.stat_number}<sup>${C.about.stat_suffix}</sup>`;
  document.getElementById('aboutStatLabel').textContent = C.about.stat_label;

  // ── PROGRAMME ──
  document.getElementById('progLabel').textContent = C.programme.label;

  const progHed = document.getElementById('progHed');
  progHed.innerHTML = C.programme.headline.replace(/\n/g, '<br/>') +
    `<em>${C.programme.em_line}</em>`;

  document.getElementById('progLead').textContent = C.programme.lead;
  document.getElementById('progBody').textContent = C.programme.body;

  document.getElementById('progPts').innerHTML = C.programme.key_points
    .map(p => `<div class="prog-pt">${p}</div>`).join('');

  const ctaEl = document.getElementById('progCta');
  ctaEl.textContent = C.programme.cta_text;
  ctaEl.href        = C.programme.cta_url;

  document.getElementById('progOutcomes').innerHTML = C.programme.outcomes.map((o, i) => `
    <div class="outcome-item">
      <span class="oi-n">0${i+1}</span>
      <div>
        <span class="oi-title">${o.title}</span>
        <p class="oi-desc">${o.desc}</p>
      </div>
    </div>
  `).join('');

  // ── NEWSLETTER preview ──
  document.getElementById('nlTag').textContent   = C.newsletter.name;
  document.getElementById('nlTitle').textContent = C.newsletter.name;
  document.getElementById('nlDesc').textContent  = C.newsletter.description;
  document.getElementById('nlcTitle').textContent = C.newsletter.latest_issue_title;
  document.getElementById('nlcPrev').textContent  = C.newsletter.latest_issue_preview;

  // ── VIDEOS ──
  renderVideos();

  // ── SUBSCRIBE (section removed) ──

  // ── TESTIMONIALS ──
  const track = document.getElementById('testiTrack');
  track.innerHTML = C.testimonials.map(t => `
    <div class="testi-card gsap-reveal">
      <span class="testi-q">&ldquo;</span>
      <p class="testi-text">${t.quote}</p>
      <div class="testi-author">
        <div class="ta-av">${t.initial}</div>
        <div><strong>${t.name}</strong><span>${t.role}</span></div>
      </div>
    </div>
  `).join('');

  // ── MODAL gifts ──
  document.getElementById('modalGifts').innerHTML = `
    <div class="mg-i"><span class="mg-n">01</span>
      <div><strong>${C.newsletter.gift_1_title}</strong><span>Free PDF guide</span></div>
    </div>
  `;

  // ── FOOTER ──
  document.getElementById('footLogo').textContent = C.name;
  document.getElementById('footName').textContent = C.name;
  document.getElementById('footTag').textContent  = C.footer.tagline;
  document.getElementById('footDisclaimer').textContent = C.footer.disclaimer;
  document.getElementById('footYear').textContent = new Date().getFullYear();

  const socMeta = [
    { key: 'twitter',   label: '𝕏',  text: 'Twitter / X'  },
    { key: 'linkedin',  label: 'in', text: 'LinkedIn'      },
    { key: 'instagram', label: 'ig', text: 'Instagram'     },
    { key: 'facebook',  label: 'fb', text: 'Facebook'      },
    { key: 'youtube',   label: 'yt', text: 'YouTube'       },
    { key: 'substack',  label: 'S',  text: 'Substack'      },
    { key: 'threads',   label: 'th', text: 'Threads'       },
  ];

  const footSocs = document.getElementById('footSocials');
  footSocs.innerHTML = socMeta.map(s =>
    `<a class="fs" href="${C.socials[s.key]}" aria-label="${s.text}" target="_blank" rel="noopener">${ICONS[s.key] || s.label}</a>`
  ).join('');

  const footSocCol = document.getElementById('footSocialCol');
  footSocCol.innerHTML = `<p class="fc-head">Connect</p>` +
    socMeta.map(s =>
      `<a href="${C.socials[s.key]}" target="_blank" rel="noopener">${s.text}</a>`
    ).join('');

  // YouTube link
  const ytLink = document.getElementById('ytLink');
  if (ytLink) ytLink.href = C.socials.youtube || '#';

  // Browser title
  document.title = C.name;

  // Apply any site config overrides from admin panel
  const _siteCfg = JSON.parse(localStorage.getItem('sr_site_config') || '{}');
  if (_siteCfg.programme_cta_url) {
    const ctaEl = document.getElementById('progCta');
    if (ctaEl) ctaEl.href = _siteCfg.programme_cta_url;
    const navCta = document.getElementById('navCta');
    if (navCta) navCta.href = '/reset';
  }
  if (_siteCfg.youtube_url) {
    const ytEl = document.getElementById('ytLink');
    if (ytEl) ytEl.href = _siteCfg.youtube_url;
  }
}

/* ──────────────────────────────────────────────────────────────
   VIDEOS
────────────────────────────────────────────────────────────── */
function renderVideos() {
  const grid = document.getElementById('vidsGrid');
  if (!grid) return;
  const C = CONTENT;
  const gradients = [
    'linear-gradient(135deg,#1B4332,#40916C)',
    'linear-gradient(135deg,#1a1a2e,#16213e)',
    'linear-gradient(135deg,#0d1117,#1c2942)',
  ];

  if (C.videos && C.videos.length > 0) {
    // Real videos
    grid.innerHTML = C.videos.map((v, i) => `
      <div class="vid-card gsap-reveal">
        <div class="vid-thumb" style="background:${gradients[i % gradients.length]};position:relative;">
          <iframe src="https://www.youtube.com/embed/${v.id}?rel=0"
            frameborder="0" allow="autoplay;encrypted-media" allowfullscreen loading="lazy"
            style="position:absolute;inset:0;width:100%;height:100%;"></iframe>
        </div>
        <div class="vid-info">
          <span class="vid-tag">${v.tag}</span>
          <p class="vid-title">${v.title}</p>
        </div>
      </div>
    `).join('');
  } else {
    // Placeholders
    grid.innerHTML = C.video_placeholders.map(v => `
      <div class="vid-card gsap-reveal">
        <div class="vid-thumb" style="background:linear-gradient(135deg,${v.gradient})">
          <div class="vid-play">▶</div>
          <span class="vid-badge">Coming Soon</span>
        </div>
        <div class="vid-info">
          <span class="vid-tag">${v.tag}</span>
          <p class="vid-title">${v.title}</p>
        </div>
      </div>
    `).join('');
  }
}


/* ──────────────────────────────────────────────────────────────
   PRELOADER
────────────────────────────────────────────────────────────── */
function initPreloader() {
  const pl = document.getElementById('preloader');
  if (!pl) { initHeroAnimation(); return; }

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    if (pl.parentNode) pl.remove();
    initHeroAnimation();
  };

  const minDelay   = new Promise(resolve => setTimeout(resolve, 1800));
  const fontsReady = (document.fonts && document.fonts.ready)
                       ? document.fonts.ready
                       : Promise.resolve();

  Promise.all([minDelay, fontsReady]).then(() => {
    pl.style.transition = 'transform 0.9s cubic-bezier(0.86,0,0.07,1)';
    pl.style.transform = 'translateY(-100%)';
    setTimeout(finish, 950);
  });

  // Hard fallback in case anything stalls
  setTimeout(finish, 4000);
}


/* ──────────────────────────────────────────────────────────────
   HERO VIDEO — HLS init
────────────────────────────────────────────────────────────── */
function initHeroVideo() {
  const video = document.getElementById('heroVideo');
  if (!video) return;

  const playbackId = 'Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g';
  const hlsSrc = `https://stream.mux.com/${playbackId}.m3u8`;

  if (typeof Hls !== 'undefined' && Hls.isSupported()) {
    const hls = new Hls();
    hls.on(Hls.Events.ERROR, function(_, data) {
      if (data.fatal) {
        console.warn('[hero-video] Fatal HLS error:', data.details);
        hls.destroy();
      }
    });
    hls.loadSource(hlsSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      video.play().catch(() => {});
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    // Safari native HLS
    video.src = hlsSrc;
    video.addEventListener('loadedmetadata', () => {
      video.play().catch(() => {});
    });
  }
}


/* ──────────────────────────────────────────────────────────────
   HERO ANIMATION  (fires after preloader exits)
────────────────────────────────────────────────────────────── */
function initHeroAnimation() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Nav fade in
  tl.to('.nav-logo',  { opacity: 1, duration: 0.6 }, 0)
    .to('.nav-links', { opacity: 1, duration: 0.6 }, 0.1)

  // Eyebrow
    .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.8 }, 0.3)

  // Headline lines one by one
    .to('.hero-hed .line', {
      y: '0%',
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
    }, 0.5)

  // Subtext
    .to('.hero-sub',   { opacity: 1, y: 0, duration: 0.8 }, 1.0)

  // Email form
    .to('.hero-field',  { opacity: 1, y: 0, duration: 0.8 }, 1.2)
    .to('.hero-note',   { opacity: 1, duration: 0.5 },        1.4)

  // Stats
    .to('.hero-stats', { opacity: 1, y: 0, duration: 0.8 }, 1.4);
}

/* ──────────────────────────────────────────────────────────────
   SCROLL ANIMATIONS  (GSAP + ScrollTrigger)
────────────────────────────────────────────────────────────── */
function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);
  if (typeof ScrollToPlugin !== 'undefined') gsap.registerPlugin(ScrollToPlugin);

  // ── MISSION ──
  gsap.from('.miss-rule', {
    scaleX: 0, transformOrigin: 'left',
    duration: 1.2, ease: 'power4.out',
    scrollTrigger: { trigger: '.mission', start: 'top 75%' }
  });
  gsap.from('.miss-quote', {
    opacity: 0, y: 40,
    duration: 1.2, ease: 'power4.out', delay: 0.2,
    scrollTrigger: { trigger: '.mission', start: 'top 70%' }
  });
  gsap.from('.miss-body', {
    opacity: 0, y: 25, duration: 1, ease: 'power4.out', delay: 0.5,
    scrollTrigger: { trigger: '.mission', start: 'top 70%' }
  });

  // ── STATS BAR (count up) ──
  ScrollTrigger.create({
    trigger: '.stats-bar',
    start: 'top 80%',
    once: true,
    onEnter: () => {
      document.querySelectorAll('.stat-counter').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        gsap.to(el, {
          innerText: target,
          duration: 1.8,
          ease: 'power2.out',
          snap: { innerText: 1 },
          onUpdate() { el.textContent = Math.round(el._gsap.innerText || 0); }
        });
      });
    }
  });

  // ── ABOUT ──
  // Curtain lift on about image
  gsap.to('.about-img-curtain', {
    scaleY: 0,
    transformOrigin: 'top',
    duration: 1.4,
    ease: 'power4.inOut',
    scrollTrigger: { trigger: '.about-img-outer', start: 'top 72%' }
  });

  gsap.from('.about-stat', {
    opacity: 0, x: 30, duration: 1, ease: 'power4.out',
    scrollTrigger: { trigger: '.about-stat', start: 'top 80%' }
  });

  gsap.from('.about-hed', {
    opacity: 0, y: 35, duration: 1.1, ease: 'power4.out',
    scrollTrigger: { trigger: '.about-hed', start: 'top 80%' }
  });

  gsap.from('.about-lead', {
    opacity: 0, y: 25, duration: 1, ease: 'power4.out', delay: 0.15,
    scrollTrigger: { trigger: '.about-lead', start: 'top 80%' }
  });

  gsap.from('#aboutParas p', {
    opacity: 0, y: 20, duration: 0.9, stagger: 0.15, ease: 'power4.out',
    scrollTrigger: { trigger: '#aboutParas', start: 'top 78%' }
  });

  gsap.from('.area-row', {
    opacity: 0, x: -20, duration: 0.7, stagger: 0.1, ease: 'power4.out',
    scrollTrigger: { trigger: '.about-areas', start: 'top 80%' }
  });

  // ── PROGRAMME ──
  gsap.from('.prog-hed', {
    opacity: 0, y: 40, duration: 1.2, ease: 'power4.out',
    scrollTrigger: { trigger: '.prog', start: 'top 70%' }
  });

  gsap.from(['.prog-lead', '.prog-body', '.prog-pts', '.prog-cta'], {
    opacity: 0, y: 25, duration: 0.9, stagger: 0.12, ease: 'power4.out',
    scrollTrigger: { trigger: '.prog-left', start: 'top 70%' }
  });

  gsap.from('.outcome-item', {
    opacity: 0, x: 30, duration: 0.8, stagger: 0.12, ease: 'power4.out',
    scrollTrigger: { trigger: '.prog-panel', start: 'top 72%' }
  });

  // ── RESOURCES ──
  gsap.from('.res-header', {
    opacity: 0, y: 30, duration: 1, ease: 'power4.out',
    scrollTrigger: { trigger: '.resources', start: 'top 72%' }
  });

  gsap.from('.nl-row', {
    opacity: 0, y: 35, duration: 1.1, ease: 'power4.out',
    scrollTrigger: { trigger: '.nl-row', start: 'top 74%' }
  });

  gsap.from('.vid-card', {
    opacity: 0, y: 30, duration: 0.8, stagger: 0.1, ease: 'power4.out',
    scrollTrigger: { trigger: '.vids-grid', start: 'top 78%' }
  });

  gsap.from('.pillar-row', {
    opacity: 0, x: -20, duration: 0.7, stagger: 0.08, ease: 'power4.out',
    scrollTrigger: { trigger: '.pillars-list', start: 'top 78%' }
  });

  // ── SUBSCRIBE ──
  gsap.from('.sub-hed', {
    opacity: 0, y: 35, duration: 1.1, ease: 'power4.out',
    scrollTrigger: { trigger: '.subscribe', start: 'top 70%' }
  });

  gsap.from('.sub-right', {
    opacity: 0, y: 30, duration: 1, ease: 'power4.out', delay: 0.2,
    scrollTrigger: { trigger: '.subscribe', start: 'top 70%' }
  });

  // ── TESTIMONIALS ──
  gsap.set('.testi-card', { opacity: 1, y: 0, clearProps: 'opacity,transform' });
  gsap.from('.testi-card', {
    opacity: 0, y: 30, duration: 0.9, stagger: 0.1, ease: 'power4.out',
    scrollTrigger: { trigger: '.testi-track', start: 'top 90%', toggleActions: 'play none none none' }
  });
}


/* ──────────────────────────────────────────────────────────────
   CINEMATIC SECTION  — entrance animations & parallax
────────────────────────────────────────────────────────────── */
function initCinema() {
  const section = document.querySelector('.cinema');
  if (!section) return;

  // ── Image reveal on scroll ──
  gsap.from('.cinema-img-wrap', {
    opacity: 0,
    y: -20,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.cinema', start: 'top 80%' }
  });

  // ── Entrance: text lines reveal on scroll ──
  gsap.to('.cinema-eyebrow', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.cinema-content', start: 'top 85%' }
  });

  gsap.to('.cinema .cl-inner', {
    y: '0%',
    duration: 0.9,
    stagger: 0.12,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.cinema-content', start: 'top 80%' }
  });

  // Gold rule draws in
  gsap.to('.cinema-rule', {
    scaleX: 1,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.3,
    scrollTrigger: { trigger: '.cinema-content', start: 'top 75%' }
  });

  gsap.to('.cinema-sub', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.4,
    scrollTrigger: { trigger: '.cinema-content', start: 'top 75%' }
  });

  // ── Parallax: mission background (class selector, not pseudo) ──
  // We target the section itself and adjust background-position via JS
  ScrollTrigger.create({
    trigger: '.mission',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      const p = 35 + self.progress * 15;
      const el = document.querySelector('.mission');
      if (el) el.style.setProperty('--bg-pos', p + '%');
    }
  });

  // ── Parallax: programme course image ──
  gsap.to('.prog::after', {
    y: '10%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.prog',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
}


/* ──────────────────────────────────────────────────────────────
   MAGNETIC BUTTON
────────────────────────────────────────────────────────────── */
function initMagnetic() {
  const magnets = document.querySelectorAll('.magnetic');
  magnets.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) * 0.35;
      const y = (e.clientY - r.top  - r.height / 2) * 0.35;
      gsap.to(el, { x, y, duration: 0.4, ease: 'power3.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
    });
  });
}


/* ──────────────────────────────────────────────────────────────
   CURSOR
────────────────────────────────────────────────────────────── */
function initCursor() {
  const cursor = document.getElementById('cursor');
  let mx = -200, my = -200, cx = -200, cy = -200;
  let appeared = false;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    // Only reveal cursor after we have a real mouse position
    if (!appeared) {
      cx = mx; cy = my;            // snap to actual position immediately
      cursor.style.opacity = '1';  // fade in
      appeared = true;
    }
  });

  function loop() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(loop);
  }
  loop();

  const hoverable = 'a, button, input, select, textarea';
  document.addEventListener('mouseover',  e => { if (e.target.closest(hoverable)) cursor.classList.add('expand'); });
  document.addEventListener('mouseout',   e => { if (e.target.closest(hoverable)) cursor.classList.remove('expand'); });
  document.addEventListener('mouseleave', () => cursor.classList.add('hide'));
  document.addEventListener('mouseenter', () => cursor.classList.remove('hide'));
}


/* ──────────────────────────────────────────────────────────────
   SCROLL PROGRESS BAR
────────────────────────────────────────────────────────────── */
function initScrollBar() {
  const bar = document.getElementById('scrollBar');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}


/* ──────────────────────────────────────────────────────────────
   NAVIGATION
────────────────────────────────────────────────────────────── */
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  // Scroll: add 'filled' class for background change
  window.addEventListener('scroll', () => {
    nav.classList.toggle('filled', window.scrollY > 30);
  }, { passive: true });

  // Mobile hamburger (if present)
  const ham    = document.getElementById('navHam');
  const mobile = document.getElementById('navMobile');
  if (ham && mobile) {
    const links = document.querySelectorAll('.nm-link');
    ham.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      ham.classList.toggle('open', open);
    });
    links.forEach(l => l.addEventListener('click', () => {
      mobile.classList.remove('open');
      ham.classList.remove('open');
    }));
    document.addEventListener('click', e => {
      if (!nav.contains(e.target)) {
        mobile.classList.remove('open');
        ham.classList.remove('open');
      }
    });
  }
}


/* ──────────────────────────────────────────────────────────────
   SMOOTH ANCHOR SCROLL
────────────────────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#top') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 72 + 12;
      gsap.to(window, {
        scrollTo: { y: target, offsetY: offset },
        duration: 1.2,
        ease: 'power4.inOut',
      });
    });
  });
}


/* ──────────────────────────────────────────────────────────────
   EMAIL — KIT (CONVERTKIT) INTEGRATION
   Reads credentials from CONTENT.email_provider in content.js
────────────────────────────────────────────────────────────── */

/**
 * Subscribe an email to Kit (ConvertKit) via the /api/subscribe serverless function.
 * Falls back to localStorage if the function is not available (local dev).
 */
async function subscribeEmail({ email, firstName = '', source = 'website', interest = '' }) {
  const cfg = CONTENT.email_provider || {};

  // ── PRIMARY: POST to serverless function ──────────────────────────────
  try {
    const payload = {
      email,
      first_name: firstName,
      source,
    };
    if (interest) payload.fields = { interest };

    // Attach tag if configured in content.js
    if (cfg.tag_id) {
      payload.tag_id = cfg.tag_id;
    }

    const res = await fetch('/api/subscribe', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.warn('[subscribe] Server error:', err.error || res.status);
      // Save locally as fallback backup
      saveEmailLocally(email, firstName, source);
      return { ok: false, msg: err.error || 'Something went wrong. Please try again.' };
    }

    // Fire GA4 event if Analytics is loaded
    if (typeof window.trackSubscribe === 'function') {
      window.trackSubscribe(source);
    }

    saveEmailLocally(email, firstName, source); // local backup too
    return { ok: true };

  } catch (networkErr) {
    console.warn('[subscribe] Network error — falling back to localStorage:', networkErr);

    // ── FALLBACK: local storage (local dev when function not available) ──
    saveEmailLocally(email, firstName, source);
    if (typeof window.trackSubscribe === 'function') {
      window.trackSubscribe(source);
    }
    return { ok: true };
  }
}

/** Always save a local backup in the browser */
function saveEmailLocally(email, name = '', source = 'website') {
  const list = JSON.parse(localStorage.getItem('sr_subs') || '[]');
  if (!list.find(s => s.email === email)) {
    list.push({ email, name, source, date: new Date().toISOString() });
    localStorage.setItem('sr_subs', JSON.stringify(list));
  }
}

function showToast(msg, type = 'success') {
  const t    = document.getElementById('toast');
  const dot  = t.querySelector('.toast-dot');
  document.getElementById('toastMsg').textContent = msg;
  dot.style.background = type === 'error' ? '#c0392b' : 'var(--forest-lite)';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 5000);
}

/* ──────────────────────────────────────────────────────────────
   FORMS
────────────────────────────────────────────────────────────── */
function initForms() {

  // ── HERO FORM ──
  document.getElementById('heroForm').addEventListener('submit', async e => {
    e.preventDefault();
    const btn   = e.target.querySelector('button');
    const el    = document.getElementById('heroEmail');
    const nameEl = document.getElementById('heroName');
    const email = el.value.trim();
    const name  = nameEl ? nameEl.value.trim() : '';
    if (!email || !name) return;

    // Loading state
    const orig = btn.textContent;
    btn.textContent = '...';
    btn.disabled = true;

    const result = await subscribeEmail({ email, firstName: name, source: 'hero' });

    btn.textContent = orig;
    btn.disabled    = false;

    if (result.ok) {
      el.value = '';
      if (nameEl) nameEl.value = '';
      showToast('You\'re subscribed — check your inbox for your free resources.');
      sessionStorage.setItem('subscribed', '1');
    } else {
      showToast(result.msg || 'Something went wrong. Please try again.', 'error');
    }
  });

  // ── SUBSCRIBE SECTION FORM (section removed) ──
  const __subForm = document.getElementById('subForm');
  if (__subForm) __subForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn    = e.target.querySelector('button[type="submit"]');
    const inputs = e.target.querySelectorAll('input');
    const name   = inputs[0]?.value.trim() || '';
    const email  = inputs[1]?.value.trim() || '';
    if (!email) return;

    // Loading state
    const orig = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const interest = e.target.querySelector('select')?.value || '';
    const result = await subscribeEmail({ email, firstName: name, source: 'subscribe-section', interest });

    btn.textContent = orig;
    btn.disabled    = false;

    if (result.ok) {
      sessionStorage.setItem('subscribed', '1');
      if (typeof gsap !== 'undefined') {
        gsap.to('#subForm', {
          opacity: 0, y: -12, duration: 0.4, ease: 'power3.in',
          onComplete: () => {
            document.getElementById('subForm').innerHTML = `
              <div style="text-align:center;padding:3rem 0;">
                <p style="font-family:'Cormorant Garamond',serif;font-size:3.5rem;font-style:italic;color:var(--white);margin-bottom:0.75rem;line-height:1;">Done.</p>
                <p style="font-size:0.9rem;color:rgba(255,255,255,0.55);line-height:1.8;">Check your inbox — both free resources<br/>are on their way to you now.</p>
              </div>`;
            gsap.fromTo('#subForm', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
          }
        });
      }
      showToast('Welcome. Your free resources are heading to you now.');
    } else {
      showToast(result.msg || 'Something went wrong. Please try again.', 'error');
    }
  });
}


/* ──────────────────────────────────────────────────────────────
   FREE RESOURCES FORM
────────────────────────────────────────────────────────────── */
function initModal() {
  const form = document.getElementById('modalForm');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const el    = form.querySelector('input[type="email"]');
    const btn   = form.querySelector('button[type="submit"]');
    const email = el.value.trim();
    if (!email) return;

    const orig = btn.textContent;
    btn.textContent = '...';
    btn.disabled = true;

    const result = await subscribeEmail({ email, source: 'free-resources' });

    if (result.ok) {
      showToast('Check your inbox — your free resources are heading to you now.');
      sessionStorage.setItem('subscribed', '1');
      el.value = '';
    } else {
      showToast(result.msg || 'Something went wrong. Please try again.', 'error');
    }
    btn.textContent = orig;
    btn.disabled    = false;
  });
}


/* ──────────────────────────────────────────────────────────────
   SHARED UTILITIES
────────────────────────────────────────────────────────────── */
function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function initPwToggle(inputId, btnId) {
  const input = document.getElementById(inputId);
  const btn   = document.getElementById(btnId);
  if (!input || !btn) return;
  btn.addEventListener('click', () => {
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    btn.querySelector('.icon-eye').style.display     = show ? 'none'  : 'block';
    btn.querySelector('.icon-eye-off').style.display = show ? 'block' : 'none';
    input.focus();
  });
}

async function hashPassword(pw) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pw));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}


/* ──────────────────────────────────────────────────────────────
   STUDY ZONE GATE  (mid-page password → study.html)
────────────────────────────────────────────────────────────── */
function initStudyGate() {
  const input  = document.getElementById('studyPwInput');
  const submit = document.getElementById('studySubmit');
  const errEl  = document.getElementById('studyPwError');
  const link   = document.getElementById('sgSignInLink');
  if (!input || !submit) return;

  initPwToggle('studyPwInput', 'studyPwToggle');

  function attempt() {
    const pw       = input.value.trim();
    const correct  = (CONTENT.passwords || {}).study || '';
    if (!pw) { errEl.textContent = 'Please enter a password.'; return; }
    if (pw === correct) {
      sessionStorage.setItem('sr_study_session', '1');
      window.location.href = 'study.html';
    } else {
      errEl.textContent = 'Incorrect password. Try again.';
      input.select();
    }
  }

  submit.addEventListener('click', attempt);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') attempt(); });

  // Also allow nav Sign In → study link to trigger this section scroll
  if (link) {
    link.addEventListener('click', e => {
      e.preventDefault();
      const signInBtn = document.getElementById('navSignIn');
      if (signInBtn) signInBtn.click();
    });
  }
}


/* ──────────────────────────────────────────────────────────────
   SUBSCRIBER SIGN-IN  (nav top-right)
────────────────────────────────────────────────────────────── */
function initSubscriberLogin() {
  const navBtn  = document.getElementById('navSignIn');
  const wrap    = document.getElementById('signinWrap');
  const close   = document.getElementById('signinClose');
  const pwInput = document.getElementById('signinPwInput');
  const pwBtn   = document.getElementById('signinSubmit');
  const errEl   = document.getElementById('signinError');
  const loginEl = document.getElementById('spLogin');
  const areaEl  = document.getElementById('spArea');
  const signout = document.getElementById('spSignout');
  if (!navBtn || !wrap) return;

  initPwToggle('signinPwInput', 'signinPwToggle');

  const SESSION_KEY = 'sr_subscriber_session';

  function isLoggedIn() { return sessionStorage.getItem(SESSION_KEY) === '1'; }

  function openPanel() {
    wrap.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (isLoggedIn()) {
      showArea();
    } else {
      loginEl.style.display = 'block';
      areaEl.style.display  = 'none';
      setTimeout(() => pwInput && pwInput.focus(), 300);
    }
  }

  function closePanel() {
    wrap.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showArea() {
    loginEl.style.display = 'none';
    areaEl.style.display  = 'block';
    navBtn.textContent    = 'Members ✓';
    navBtn.classList.add('signed-in');

    const SA = CONTENT.subscriber_area || {};
    const wEl = document.getElementById('spWelcome');
    const sEl = document.getElementById('spAreaSub');
    const lEl = document.getElementById('spLinks');
    if (wEl) wEl.textContent = SA.headline || 'Welcome back.';
    if (sEl) sEl.textContent = SA.subheadline || 'Your subscriber resources:';
    if (lEl && SA.links) {
      lEl.innerHTML = SA.links.map(l =>
        `<a class="sp-link-item" href="${l.url}"${l.url !== '#' ? ' target="_blank" rel="noopener"' : ''}>${escHtml(l.label)}</a>`
      ).join('');
    }
  }

  function doLogin() {
    const pw      = pwInput.value.trim();
    const correct = (CONTENT.passwords || {}).subscriber || '';
    if (!pw) { errEl.textContent = 'Please enter a password.'; return; }
    if (pw === correct) {
      sessionStorage.setItem(SESSION_KEY, '1');
      errEl.textContent = '';
      showArea();
    } else {
      errEl.textContent = 'Incorrect password.';
      pwInput.select();
    }
  }

  navBtn.addEventListener('click', e => { e.preventDefault(); openPanel(); });
  close.addEventListener('click', closePanel);
  wrap.addEventListener('click', e => { if (e.target === wrap) closePanel(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && wrap.classList.contains('open')) closePanel(); });

  if (pwBtn)   pwBtn.addEventListener('click', doLogin);
  if (pwInput) pwInput.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });

  if (signout) {
    signout.addEventListener('click', () => {
      sessionStorage.removeItem(SESSION_KEY);
      navBtn.textContent = 'Sign In';
      navBtn.classList.remove('signed-in');
      loginEl.style.display = 'block';
      areaEl.style.display  = 'none';
      if (pwInput) pwInput.value = '';
    });
  }

  // Restore session state on load
  if (isLoggedIn()) {
    navBtn.textContent = 'Members ✓';
    navBtn.classList.add('signed-in');
  }
}


/* ──────────────────────────────────────────────────────────────
   ADMIN PANEL  (footer ⚙ Admin button → full Business OS admin)
────────────────────────────────────────────────────────────── */
function initAdminPanel() {
  const trigger   = document.getElementById('adminTrigger');
  const adminWrap = document.getElementById('adminWrap');
  const adminClose= document.getElementById('adminClose');
  const adminInput= document.getElementById('adminPwInput');
  const adminSubmit=document.getElementById('adminSubmit');
  const adminError= document.getElementById('adminError');
  const adminTitle= document.getElementById('adminTitle');
  const adminLabel= document.getElementById('adminLabel');
  if (!trigger || !adminWrap) return;

  initPwToggle('adminPwInput', 'adminPwToggle');

  // Shift + click = reset password
  trigger.addEventListener('click', e => {
    if (e.shiftKey) {
      localStorage.removeItem('sr_admin_pw_hash');
      showToast('Admin password cleared. Click ⚙ Admin to set a new one.');
      return;
    }
    openAdminLogin();
  });

  // Triple-click on copyright text (hidden admin trigger per design spec)
  let adminClicks = 0, adminTimer;
  const footCopy = document.querySelector('.foot-copy');
  if (footCopy) {
    footCopy.addEventListener('click', e => {
      if (e.shiftKey) {
        localStorage.removeItem('sr_admin_pw_hash');
        showToast('Admin password reset.');
        return;
      }
      adminClicks++;
      clearTimeout(adminTimer);
      adminTimer = setTimeout(() => { adminClicks = 0; }, 1500);
      if (adminClicks >= 3) { adminClicks = 0; openAdminLogin(); }
    });
  }

  function openAdminLogin() {
    const hasPw = !!localStorage.getItem('sr_admin_pw_hash');
    if (adminTitle)  adminTitle.textContent  = hasPw ? 'Enter password' : 'Set a password';
    if (adminLabel)  adminLabel.textContent  = hasPw ? 'Admin Access'   : 'First-time setup';
    if (adminSubmit) adminSubmit.textContent = hasPw ? 'Enter →'        : 'Set password →';
    if (adminError)  adminError.textContent  = '';
    if (adminInput)  adminInput.value        = '';
    adminWrap.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => adminInput && adminInput.focus(), 300);
  }

  function closeAdminLogin() {
    adminWrap.classList.remove('open');
    document.body.style.overflow = '';
  }

  adminClose.addEventListener('click', closeAdminLogin);
  adminWrap.addEventListener('click', e => { if (e.target === adminWrap) closeAdminLogin(); });

  if (adminSubmit) {
    adminSubmit.addEventListener('click', async () => {
      const pw     = adminInput.value.trim();
      if (!pw) { adminError.textContent = 'Please enter a password.'; return; }
      const stored = localStorage.getItem('sr_admin_pw_hash');
      const hash   = await hashPassword(pw);
      if (!stored) {
        localStorage.setItem('sr_admin_pw_hash', hash);
        closeAdminLogin();
        openAdminDashboard();
      } else if (hash === stored) {
        closeAdminLogin();
        openAdminDashboard();
      } else {
        adminError.textContent = 'Incorrect password.';
        adminInput.select();
      }
    });
  }
  if (adminInput) adminInput.addEventListener('keydown', e => { if (e.key === 'Enter') adminSubmit.click(); });

  // Dashboard
  const admWrap  = document.getElementById('admWrap');
  const admClose = document.getElementById('admClose');

  function openAdminDashboard() {
    populateSubscribersTab();
    populateStatusTab();
    admWrap.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAdminDashboard() {
    admWrap.classList.remove('open');
    document.body.style.overflow = '';
  }

  admClose.addEventListener('click', closeAdminDashboard);
  admWrap.addEventListener('click', e => { if (e.target === admWrap) closeAdminDashboard(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (adminWrap.classList.contains('open')) closeAdminLogin();
      if (admWrap.classList.contains('open'))   closeAdminDashboard();
    }
  });

  document.querySelectorAll('.adm-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.adm-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const t = tab.dataset.tab;
      document.getElementById('admSubs').style.display   = t === 'subs'   ? 'block' : 'none';
      document.getElementById('admStatus').style.display = t === 'status' ? 'block' : 'none';
      document.getElementById('admStudy').style.display  = t === 'study'  ? 'block' : 'none';
      if (t === 'study') populateStudyTab();
      document.getElementById('admConfig').style.display = t === 'config' ? 'block' : 'none';
      if (t === 'config') populateConfigTab();
    });
  });

  function populateSubscribersTab() {
    const subs  = JSON.parse(localStorage.getItem('sr_subs') || '[]');
    const count = document.getElementById('admSubCount');
    const tbody = document.getElementById('admTableBody');
    const empty = document.getElementById('admEmpty');
    if (count) count.textContent = subs.length;
    if (subs.length === 0) {
      if (tbody) tbody.innerHTML = '';
      if (empty) empty.style.display = 'block';
    } else {
      if (empty) empty.style.display = 'none';
      if (tbody) tbody.innerHTML = subs.slice().reverse().map(s => `
        <tr>
          <td>${escHtml(s.email)}</td>
          <td>${escHtml(s.name||'—')}</td>
          <td>${escHtml(s.source||'—')}</td>
          <td>${new Date(s.date).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})}</td>
        </tr>`).join('');
    }
    // Kit API fetch button
    const paneHead = document.querySelector('#admSubs .adm-pane-head');
    if (paneHead && !document.getElementById('admFetchKit')) {
      const kitBtn = document.createElement('button');
      kitBtn.id = 'admFetchKit';
      kitBtn.className = 'adm-export';
      kitBtn.style.marginLeft = '0.5rem';
      kitBtn.textContent = 'Fetch from Kit';
      paneHead.appendChild(kitBtn);
      kitBtn.addEventListener('click', async () => {
        let token = localStorage.getItem('sr_admin_token');
        if (!token) {
          token = prompt('Enter your Admin Token (stored locally for this session):');
          if (!token) return;
          localStorage.setItem('sr_admin_token', token);
        }
        try {
          kitBtn.textContent = 'Fetching…';
          kitBtn.disabled = true;
          const res = await fetch('/api/subscribers', { headers: { 'X-Admin-Token': token } });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = await res.json();
          const kitSubs = Array.isArray(data) ? data : (data.subscribers || []);
          // Merge: add Kit subs not already in local list (by email)
          const localSubs = JSON.parse(localStorage.getItem('sr_subs') || '[]');
          const localEmails = new Set(localSubs.map(s => s.email.toLowerCase()));
          let added = 0;
          kitSubs.forEach(ks => {
            const email = (ks.email_address || ks.email || '').toLowerCase();
            if (email && !localEmails.has(email)) {
              localSubs.push({
                email: ks.email_address || ks.email || '',
                name:  ks.first_name ? `${ks.first_name} ${ks.last_name||''}`.trim() : (ks.name || ''),
                source: 'Kit',
                date:  ks.created_at || new Date().toISOString()
              });
              localEmails.add(email);
              added++;
            }
          });
          if (added > 0) localStorage.setItem('sr_subs', JSON.stringify(localSubs));
          populateSubscribersTab();
          showToast(`Fetched ${kitSubs.length} Kit subscribers. ${added} new added.`);
        } catch(err) {
          showToast('Failed to fetch Kit subscribers: ' + err.message);
        } finally {
          kitBtn.textContent = 'Fetch from Kit';
          kitBtn.disabled = false;
        }
      });
    }
    const exportBtn = document.getElementById('admExport');
    if (exportBtn) exportBtn.onclick = () => {
      const rows = [['Email','Name','Source','Date']];
      subs.forEach(s => rows.push([s.email,s.name||'',s.source||'',s.date]));
      const csv  = rows.map(r=>r.map(c=>`"${c}"`).join(',')).join('\n');
      const blob = new Blob([csv],{type:'text/csv'});
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href=url; a.download=`subscribers-${new Date().toISOString().slice(0,10)}.csv`;
      a.click(); URL.revokeObjectURL(url);
    };
  }

  function populateStatusTab() {
    const C    = CONTENT;
    const cfg  = C.email_provider||{};
    const subs = JSON.parse(localStorage.getItem('sr_subs')||'[]');
    const last = subs.length ? new Date(subs[subs.length-1].date).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}) : 'None yet';
    const kitOk= !!(cfg.api_key&&cfg.form_id);
    const ga4Ok= !document.querySelector('[src*="G-XXXXXXXXXX"]');
    const el   = document.getElementById('admStatusGrid');
    if (!el) return;
    el.innerHTML = [
      {label:'Kit Connected',  val:kitOk?'✓ Yes':'✗ No', cls:kitOk?'ok':'no', desc:kitOk?'Live.':'Add api_key & form_id in content.js.'},
      {label:'GA4 Analytics',  val:ga4Ok?'✓ Yes':'✗ No', cls:ga4Ok?'ok':'no', desc:ga4Ok?'Tracking.':'Replace G-XXXXXXXXXX in index.html.'},
      {label:'Subscribers',    val:subs.length,           cls:'',              desc:`Captured locally in this browser.`},
      {label:'Last Sign-up',   val:last,                  cls:'',              desc:'Most recent date.'},
    ].map(s=>`<div class="adm-status-card"><p class="asc-label">${s.label}</p><p class="asc-val ${s.cls}">${s.val}</p><p class="asc-desc">${s.desc}</p></div>`).join('');
  }

  function getStudyItems() {
    const override = localStorage.getItem('sr_study_override');
    if (override) {
      try { return JSON.parse(override); } catch(e) {}
    }
    // Fall back to CONTENT defaults
    if (typeof CONTENT !== 'undefined' && CONTENT.study_zone && Array.isArray(CONTENT.study_zone.items)) {
      return JSON.parse(JSON.stringify(CONTENT.study_zone.items));
    }
    return [];
  }

  function saveStudyItems(items) {
    localStorage.setItem('sr_study_override', JSON.stringify(items));
  }

  function populateStudyTab() {
    const el = document.getElementById('admStudy');
    if (!el) return;
    const items = getStudyItems();

    el.innerHTML = `
      <div style="padding:1rem 0 0.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;">
        <p class="adm-pane-title">Study Zone Cards (${items.length})</p>
        <button id="admStudyReset" class="adm-export" style="background:transparent;color:var(--gold);border:1px solid var(--gold);">Reset to defaults</button>
      </div>
      <div id="admStudyAddForm" style="border:1px solid var(--cream-2);padding:1rem;margin-bottom:1rem;background:var(--cream);">
        <p style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.75rem;color:var(--ink-45);">Add New Card</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin-bottom:0.5rem;">
          <input id="szIcon"  class="adm-input" placeholder="Icon (emoji or text)" style="padding:0.4rem 0.6rem;border:1px solid var(--cream-2);background:var(--white);font-size:0.85rem;"/>
          <input id="szCat"   class="adm-input" placeholder="Category" style="padding:0.4rem 0.6rem;border:1px solid var(--cream-2);background:var(--white);font-size:0.85rem;"/>
          <input id="szTitle" class="adm-input" placeholder="Title" style="padding:0.4rem 0.6rem;border:1px solid var(--cream-2);background:var(--white);font-size:0.85rem;"/>
          <input id="szLink"  class="adm-input" placeholder="Link (URL)" style="padding:0.4rem 0.6rem;border:1px solid var(--cream-2);background:var(--white);font-size:0.85rem;"/>
        </div>
        <input id="szDesc" class="adm-input" placeholder="Description" style="width:100%;padding:0.4rem 0.6rem;border:1px solid var(--cream-2);background:var(--white);font-size:0.85rem;margin-bottom:0.5rem;"/>
        <button id="admStudyAdd" style="background:var(--forest);color:var(--white);padding:0.45rem 1.2rem;font-size:0.8rem;font-weight:600;border:none;cursor:pointer;">Add Card</button>
      </div>
      <div id="admStudyList"></div>
    `;

    renderStudyList(items);

    document.getElementById('admStudyAdd').addEventListener('click', () => {
      const icon  = document.getElementById('szIcon').value.trim();
      const cat   = document.getElementById('szCat').value.trim();
      const title = document.getElementById('szTitle').value.trim();
      const desc  = document.getElementById('szDesc').value.trim();
      const link  = document.getElementById('szLink').value.trim();
      if (!title) { showToast('Title is required.'); return; }
      const current = getStudyItems();
      current.push({ icon: icon||'📚', category: cat||'General', title, desc, link });
      saveStudyItems(current);
      populateStudyTab();
      showToast('Card added.');
    });

    document.getElementById('admStudyReset').addEventListener('click', () => {
      if (!confirm('Reset Study Zone to default content? This will remove your customisations.')) return;
      localStorage.removeItem('sr_study_override');
      populateStudyTab();
      showToast('Study Zone reset to defaults.');
    });
  }

  function renderStudyList(items) {
    const listEl = document.getElementById('admStudyList');
    if (!listEl) return;
    if (items.length === 0) {
      listEl.innerHTML = '<p style="color:var(--ink-45);font-size:0.85rem;padding:0.5rem 0;">No cards yet. Add one above.</p>';
      return;
    }
    listEl.innerHTML = items.map((item, i) => `
      <div class="adm-study-row" id="szRow-${i}" style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem 0;border-bottom:1px solid var(--cream-2);">
        <div style="flex:1;min-width:0;">
          <p style="font-size:0.8rem;font-weight:600;margin-bottom:0.1rem;">${escHtml(item.icon||'')} ${escHtml(item.title||'')}</p>
          <p style="font-size:0.72rem;color:var(--ink-45);">${escHtml(item.category||'')} — ${escHtml((item.desc||'').substring(0,80))}${(item.desc||'').length>80?'…':''}</p>
        </div>
        <div style="display:flex;gap:0.4rem;flex-shrink:0;">
          <button onclick="admStudyEditCard(${i})" style="font-size:0.72rem;padding:0.3rem 0.7rem;background:transparent;border:1px solid var(--cream-2);cursor:pointer;">Edit</button>
          <button onclick="admStudyDeleteCard(${i})" style="font-size:0.72rem;padding:0.3rem 0.7rem;background:transparent;border:1px solid #c0392b;color:#c0392b;cursor:pointer;">Delete</button>
        </div>
      </div>
    `).join('');
  }

  // Expose edit/delete as globals so inline onclick handlers work
  window.admStudyEditCard = function(i) {
    const items = getStudyItems();
    const item  = items[i];
    if (!item) return;
    const row = document.getElementById(`szRow-${i}`);
    if (!row) return;
    row.innerHTML = `
      <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:0.4rem;">
        <input id="szEditIcon-${i}"  value="${escHtml(item.icon||'')}"     placeholder="Icon"     style="padding:0.35rem 0.5rem;border:1px solid var(--cream-2);font-size:0.82rem;"/>
        <input id="szEditCat-${i}"   value="${escHtml(item.category||'')}" placeholder="Category" style="padding:0.35rem 0.5rem;border:1px solid var(--cream-2);font-size:0.82rem;"/>
        <input id="szEditTitle-${i}" value="${escHtml(item.title||'')}"    placeholder="Title"    style="padding:0.35rem 0.5rem;border:1px solid var(--cream-2);font-size:0.82rem;"/>
        <input id="szEditLink-${i}"  value="${escHtml(item.link||'')}"     placeholder="Link"     style="padding:0.35rem 0.5rem;border:1px solid var(--cream-2);font-size:0.82rem;"/>
        <input id="szEditDesc-${i}"  value="${escHtml(item.desc||'')}"     placeholder="Description" style="padding:0.35rem 0.5rem;border:1px solid var(--cream-2);font-size:0.82rem;grid-column:span 2;"/>
      </div>
      <div style="display:flex;gap:0.4rem;flex-shrink:0;margin-top:0.2rem;">
        <button onclick="admStudySaveCard(${i})" style="font-size:0.72rem;padding:0.3rem 0.7rem;background:var(--forest);color:var(--white);border:none;cursor:pointer;">Save</button>
        <button onclick="admStudyCancelEdit(${i})" style="font-size:0.72rem;padding:0.3rem 0.7rem;background:transparent;border:1px solid var(--cream-2);cursor:pointer;">Cancel</button>
      </div>
    `;
  };

  window.admStudySaveCard = function(i) {
    const items = getStudyItems();
    items[i] = {
      icon:     document.getElementById(`szEditIcon-${i}`).value.trim(),
      category: document.getElementById(`szEditCat-${i}`).value.trim(),
      title:    document.getElementById(`szEditTitle-${i}`).value.trim(),
      desc:     document.getElementById(`szEditDesc-${i}`).value.trim(),
      link:     document.getElementById(`szEditLink-${i}`).value.trim(),
    };
    saveStudyItems(items);
    populateStudyTab();
    showToast('Card saved.');
  };

  window.admStudyCancelEdit = function(i) {
    const items = getStudyItems();
    renderStudyList(items);
  };

  window.admStudyDeleteCard = function(i) {
    if (!confirm('Delete this card?')) return;
    const items = getStudyItems();
    items.splice(i, 1);
    saveStudyItems(items);
    populateStudyTab();
    showToast('Card deleted.');
  };

  function populateConfigTab() {
    const el = document.getElementById('admConfig');
    if (!el) return;
    const cfg = JSON.parse(localStorage.getItem('sr_site_config') || '{}');
    el.innerHTML = `
      <div style="padding:1rem 0 0.5rem;">
        <p class="adm-pane-title" style="margin-bottom:1.5rem;">Site Configuration</p>
        <p style="font-size:0.75rem;color:var(--ink-45);margin-bottom:1.25rem;">These override values from content.js and are stored in your browser. Changes take effect on next page load.</p>
        <div style="display:grid;gap:1rem;max-width:560px;">
          ${[
            { key:'programme_cta_url', label:'Programme CTA URL', placeholder:'https://calendly.com/sabyroy/consultation', type:'url' },
            { key:'youtube_url',       label:'YouTube Channel URL', placeholder:'https://www.youtube.com/@TheSabyMe', type:'url' },
            { key:'twitter_url',       label:'Twitter / X URL', placeholder:'https://x.com/thesabyme', type:'url' },
            { key:'linkedin_url',      label:'LinkedIn URL', placeholder:'https://linkedin.com/in/...', type:'url' },
            { key:'instagram_url',     label:'Instagram URL', placeholder:'https://instagram.com/sabyroyme', type:'url' },
            { key:'substack_url',      label:'Substack URL', placeholder:'https://substack.com/@sabyroy', type:'url' },
            { key:'threads_url',       label:'Threads URL', placeholder:'https://threads.com/@sabyroyme', type:'url' },
            { key:'facebook_url',      label:'Facebook URL', placeholder:'https://facebook.com/...', type:'url' },
          ].map(f => `
            <div>
              <label style="font-size:0.72rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-45);display:block;margin-bottom:0.3rem;">${f.label}</label>
              <input id="scf-${f.key}" type="${f.type}" value="${escHtml(cfg[f.key]||'')}" placeholder="${f.placeholder}"
                style="width:100%;padding:0.5rem 0.75rem;border:1px solid var(--cream-2);background:var(--white);font-size:0.85rem;font-family:var(--body);" />
            </div>
          `).join('')}
        </div>
        <div style="margin-top:1.5rem;display:flex;gap:0.75rem;align-items:center;">
          <button id="admConfigSave" style="background:var(--forest);color:var(--white);padding:0.55rem 1.5rem;font-size:0.82rem;font-weight:600;border:none;cursor:pointer;">Save Configuration</button>
          <button id="admConfigReset" style="background:transparent;color:#c0392b;border:1px solid #c0392b;padding:0.5rem 1.2rem;font-size:0.8rem;cursor:pointer;">Reset to defaults</button>
        </div>
        <p id="admConfigMsg" style="font-size:0.78rem;color:var(--forest);margin-top:0.75rem;min-height:1.2em;"></p>
      </div>
    `;
    document.getElementById('admConfigSave').addEventListener('click', () => {
      const keys = ['programme_cta_url','youtube_url','twitter_url','linkedin_url','instagram_url','substack_url','threads_url','facebook_url'];
      const out = {};
      keys.forEach(k => {
        const val = (document.getElementById(`scf-${k}`)?.value || '').trim();
        if (val) out[k] = val;
      });
      localStorage.setItem('sr_site_config', JSON.stringify(out));
      document.getElementById('admConfigMsg').textContent = '✓ Saved. Reload the page to see changes.';
      showToast('Site config saved. Reload to apply.');
    });
    document.getElementById('admConfigReset').addEventListener('click', () => {
      if (!confirm('Reset all site config overrides?')) return;
      localStorage.removeItem('sr_site_config');
      populateConfigTab();
      showToast('Site config reset to defaults.');
    });
  }
}


/* ──────────────────────────────────────────────────────────────
   STUDY ZONE SCROLL ANIMATION
────────────────────────────────────────────────────────────── */
function initStudyGateAnimation() {
  if (typeof gsap === 'undefined') return;
  gsap.from('.sg-icon', { opacity:0, scale:0.7, duration:1, ease:'back.out(1.7)', scrollTrigger:{trigger:'.study-gate',start:'top 75%'} });
  gsap.from('.sg-hed',  { opacity:0, y:35, duration:1.2, ease:'power4.out', delay:0.1, scrollTrigger:{trigger:'.study-gate',start:'top 72%'} });
  gsap.from('.sg-sub',  { opacity:0, y:20, duration:1,   ease:'power4.out', delay:0.2, scrollTrigger:{trigger:'.study-gate',start:'top 70%'} });
  gsap.from(['.sg-pw-wrap','.sg-btn'], { opacity:0, y:20, duration:0.9, stagger:0.12, ease:'power4.out', delay:0.3, scrollTrigger:{trigger:'.study-gate',start:'top 70%'} });
}


/* ──────────────────────────────────────────────────────────────
   GSAP SCROLLTO PLUGIN FALLBACK
  (if scrollTo plugin not loaded, use native smooth scroll)
────────────────────────────────────────────────────────────── */
if (typeof gsap !== 'undefined' && !gsap.plugins.scrollTo) {
  gsap.to = (function(original) {
    return function(target, vars) {
      if (vars && vars.scrollTo) {
        const el = typeof vars.scrollTo.y === 'string'
          ? document.querySelector(vars.scrollTo.y)
          : vars.scrollTo.y || vars.scrollTo;
        if (el && el.scrollIntoView) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      return original.call(this, target, vars);
    };
  })(gsap.to.bind(gsap));
}


/* ──────────────────────────────────────────────────────────────
   COOKIE CONSENT
────────────────────────────────────────────────────────────── */
function initCookieConsent() {
  const bar     = document.getElementById('cookieBar');
  const accept  = document.getElementById('cookieAccept');
  const decline = document.getElementById('cookieDecline');
  if (!bar) return;

  const consent = localStorage.getItem('sr_cookie_consent');
  if (consent) return; // Already decided

  // Show after a short delay
  setTimeout(() => bar.classList.add('show'), 1500);

  accept.addEventListener('click', () => {
    localStorage.setItem('sr_cookie_consent', 'accepted');
    bar.classList.remove('show');
  });

  decline.addEventListener('click', () => {
    localStorage.setItem('sr_cookie_consent', 'declined');
    bar.classList.remove('show');
    // Disable GA4 if declined
    window['ga-disable-G-XXXXXXXXXX'] = true;
  });
}


/* ──────────────────────────────────────────────────────────────
   INIT — fire everything
────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initScrollBar();
  initCursor();
  initNav();
  initForms();
  initModal();
  initStudyGate();
  initSubscriberLogin();
  initAdminPanel();
  initCookieConsent();
  initHeroVideo();

  // GSAP-dependent init
  if (typeof gsap !== 'undefined') {
    initPreloader();
    initScrollAnimations();
    initCinema();
    initMagnetic();
    initStudyGateAnimation();

    initSmoothScroll();
  } else {
    // GSAP failed to load — show everything without animation
    document.getElementById('preloader').style.display = 'none';
    document.querySelectorAll('.gsap-reveal').forEach(el => el.style.opacity = 1);
    document.querySelectorAll('.nav-logo, .nav-links').forEach(el => el.style.opacity = 1);
    // Hero content fallback — make all hero elements visible
    document.querySelectorAll('.hero-eyebrow, .hero-sub, .hero-field, .hero-note, .hero-stats').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    document.querySelectorAll('.hero-hed .line').forEach(el => {
      el.style.transform = 'translateY(0)';
    });
    // Cinema section fallback
    document.querySelectorAll('.cinema-eyebrow, .cinema-sub, .cl-inner, .cinema-img-wrap').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    const cinemaRule = document.querySelector('.cinema-rule');
    if (cinemaRule) cinemaRule.style.transform = 'scaleX(1)';
  }

  // Console signature
  console.log(
    '%c Dr. Saby Roy %c Build the life you designed.',
    'background:#1B4332;color:#F7F4EF;padding:6px 14px;font-family:"Cormorant Garamond",serif;font-style:italic;font-size:15px;',
    'background:transparent;color:#1B4332;padding:6px;font-family:serif;font-size:13px;'
  );
});
