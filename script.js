document.getElementById('year').textContent = new Date().getFullYear();
const contact = document.getElementById('email-button');
const note = document.querySelector('.contact-note');
const address = (window.YIDD_CONTACT_EMAIL || '').trim();
if (address && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) {
  contact.href = `mailto:${address}?subject=${encodeURIComponent('Hello YiDD Studio')}`;
  note.textContent = address;
} else {
  contact.removeAttribute('href');
  contact.setAttribute('aria-disabled', 'true');
  contact.title = 'Add a public email in site-config.js';
  contact.style.cursor = 'default';
}
