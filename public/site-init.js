// The Google tag itself (gtag.js and the config call) is in the <head> of index.html.

// Count call-button and WhatsApp-button taps as separate Google Ads conversions.
// Labels come from each conversion action's event snippet ('send_to': 'AW-18505451192/<label>').
var CALL_LABEL = 'rilKCOHboL8dELiNi_hE';
var WHATSAPP_LABEL = 'crrBCOTboL8dELiNi_hE';
document.addEventListener('click', function (e) {
  var link = e.target.closest && e.target.closest('a[href]');
  if (!link) return;
  var href = link.getAttribute('href') || '';
  var label = href.indexOf('tel:') === 0 ? CALL_LABEL : href.indexOf('wa.me') !== -1 ? WHATSAPP_LABEL : '';
  if (!label) return;
  gtag('event', 'conversion', {
    send_to: 'AW-18505451192/' + label,
    value: 1.0,
    currency: 'MYR'
  });
}, true);

// Load the Google Fonts stylesheet without blocking first paint
var fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
document.head.appendChild(fontLink);
