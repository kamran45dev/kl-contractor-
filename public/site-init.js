// Google tag (gtag.js) bootstrap
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18505451192');

// Count calls and WhatsApp chats as Google Ads conversions.
// Set CONVERSION_LABEL to the label from the account's event snippet
// ('send_to': 'AW-18505451192/<label>'); no events are sent while it is empty.
var CONVERSION_LABEL = 'UlliCM7hgZodELiNi_hE';
document.addEventListener('click', function (e) {
  if (!CONVERSION_LABEL) return;
  var link = e.target.closest && e.target.closest('a[href]');
  if (!link) return;
  var href = link.getAttribute('href') || '';
  if (href.indexOf('tel:') === 0 || href.indexOf('wa.me') !== -1) {
    gtag('event', 'conversion', {
      send_to: 'AW-18505451192/' + CONVERSION_LABEL,
      value: 1.0,
      currency: 'MYR'
    });
  }
}, true);

// Remember the Google Ads click ID so it can be saved with a form enquiry.
try {
  var params = new URLSearchParams(window.location.search);
  var clickId = params.get('gclid') || params.get('gbraid') || params.get('wbraid');
  if (clickId) sessionStorage.setItem('kl_gclid', clickId);
} catch { /* storage unavailable */ }

// Count a submitted contact form as a Google Ads conversion (called from the thank-you page).
// Set FORM_CONVERSION_LABEL to the label of the website conversion action
// ('send_to': 'AW-18505451192/<label>'); nothing is sent while it is empty.
var FORM_CONVERSION_LABEL = '';
window.klTrackLead = function () {
  if (!FORM_CONVERSION_LABEL) return;
  gtag('event', 'conversion', {
    send_to: 'AW-18505451192/' + FORM_CONVERSION_LABEL,
    value: 1.0,
    currency: 'MYR'
  });
};

// Load the Google Fonts stylesheet without blocking first paint
var fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
document.head.appendChild(fontLink);
