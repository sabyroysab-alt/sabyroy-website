/**
 * Lightweight UK PECR / UK GDPR cookie banner.
 * - Essential cookies only by default.
 * - Shows banner until user chooses "Accept all" or "Reject non-essential".
 * - Stores choice in localStorage under key "cookieConsent".
 * - No analytics are loaded unless "accepted".
 *
 * To include: <script src="/assets/cookie-banner.js" defer></script>
 */
(function () {
  'use strict';
  var KEY = 'cookieConsent';
  var existing = null;
  try { existing = localStorage.getItem(KEY); } catch (e) { /* storage blocked */ }
  if (existing === 'accepted' || existing === 'rejected') return;

  // Build DOM when ready.
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    if (document.getElementById('cookie-banner')) return;

    var style = document.createElement('style');
    style.textContent = [
      '#cookie-banner{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;',
      'background:#1B4332;color:#F5F0E7;border-radius:14px;padding:18px 20px;',
      'box-shadow:0 12px 40px rgba(0,0,0,0.25);font-family:Inter,system-ui,sans-serif;',
      'display:flex;flex-wrap:wrap;align-items:center;gap:14px;max-width:680px;margin:0 auto;',
      'font-size:13.5px;line-height:1.55;opacity:0;transform:translateY(10px);',
      'transition:opacity .3s ease,transform .3s ease;}',
      '#cookie-banner.show{opacity:1;transform:none;}',
      '#cookie-banner p{margin:0;flex:1 1 260px;color:#E8DFD1;}',
      '#cookie-banner a{color:#C8A96E;text-decoration:underline;}',
      '#cookie-banner .cb-actions{display:flex;gap:8px;flex-wrap:wrap;}',
      '#cookie-banner button{font-family:inherit;font-size:12.5px;font-weight:600;',
      'letter-spacing:0.04em;border:none;border-radius:999px;padding:10px 18px;cursor:pointer;',
      'transition:background .15s ease,transform .15s ease;}',
      '#cookie-banner .cb-accept{background:#C8A96E;color:#1B4332;}',
      '#cookie-banner .cb-accept:hover{background:#D8BA7E;}',
      '#cookie-banner .cb-reject{background:transparent;color:#E8DFD1;',
      'border:1px solid rgba(232,223,209,0.3);}',
      '#cookie-banner .cb-reject:hover{background:rgba(232,223,209,0.1);}',
      '@media (max-width:480px){#cookie-banner{flex-direction:column;align-items:stretch;}',
      '#cookie-banner .cb-actions{justify-content:flex-end;}}'
    ].join('');
    document.head.appendChild(style);

    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML = [
      '<p>We use strictly necessary cookies for site function and, with your consent, anonymous analytics to improve the site. We do not use advertising cookies. See our <a href="/privacy">privacy policy</a>.</p>',
      '<div class="cb-actions">',
      '<button class="cb-reject" type="button">Reject non-essential</button>',
      '<button class="cb-accept" type="button">Accept all</button>',
      '</div>'
    ].join('');
    document.body.appendChild(banner);
    requestAnimationFrame(function () { banner.classList.add('show'); });

    function dismiss(choice) {
      try { localStorage.setItem(KEY, choice); } catch (e) { /* ignore */ }
      banner.classList.remove('show');
      setTimeout(function () { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 300);
      // Fire a custom event so analytics can hook in if/when added.
      try {
        document.dispatchEvent(new CustomEvent('cookieConsent', { detail: { choice: choice } }));
      } catch (e) { /* ignore */ }
    }

    banner.querySelector('.cb-accept').addEventListener('click', function () { dismiss('accepted'); });
    banner.querySelector('.cb-reject').addEventListener('click', function () { dismiss('rejected'); });
  });
})();
