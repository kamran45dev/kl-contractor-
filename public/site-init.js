// Google tag (gtag.js) bootstrap
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18326130382');

// Count calls and WhatsApp chats as Google Ads conversions
document.addEventListener('click', function (e) {
  var link = e.target.closest && e.target.closest('a[href]');
  if (!link) return;
  var href = link.getAttribute('href') || '';
  if (href.indexOf('tel:') === 0 || href.indexOf('wa.me') !== -1) {
    gtag('event', 'conversion', { send_to: 'AW-18326130382/j5rzCIW12NMcEM6dyqJE' });
  }
}, true);

// Load the Google Fonts stylesheet without blocking first paint
var fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
document.head.appendChild(fontLink);
