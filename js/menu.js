const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.site-header');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('compact');
  } else {
    header.classList.remove('compact');
  }
});
