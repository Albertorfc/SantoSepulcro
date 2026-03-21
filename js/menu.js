const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const searchToggle = document.querySelector('.search-toggle');
const searchPanel = document.querySelector('.search-panel');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    menuToggle.classList.toggle('is-active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));

    if (isOpen && searchPanel.classList.contains('is-open')) {
      searchPanel.classList.remove('is-open');
      searchToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if (searchToggle && searchPanel) {
  searchToggle.addEventListener('click', () => {
    const isOpen = searchPanel.classList.toggle('is-open');
    searchToggle.setAttribute('aria-expanded', String(isOpen));

    if (isOpen && mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
      menuToggle.classList.remove('is-active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const mobileLinks = document.querySelectorAll('.mobile-nav a');
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    menuToggle.classList.remove('is-active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
