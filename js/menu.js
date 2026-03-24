const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const searchToggle = document.querySelector(".search-toggle");
const searchPanel = document.querySelector(".search-panel");
const header = document.querySelector(".site-header");
const isHome = document.body.classList.contains("home");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggle.classList.toggle("is-active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    if (isOpen && searchPanel.classList.contains("is-open")) {
      searchPanel.classList.remove("is-open");
      searchToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (searchToggle && searchPanel) {
  searchToggle.addEventListener("click", () => {
    const isOpen = searchPanel.classList.toggle("is-open");
    searchToggle.setAttribute("aria-expanded", String(isOpen));

    if (isOpen && mobileMenu.classList.contains("is-open")) {
      mobileMenu.classList.remove("is-open");
      menuToggle.classList.remove("is-active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    menuToggle.classList.remove("is-active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function updateHeaderOnScroll() {
  if (!header) return;

  if (!isHome || window.innerWidth > 900) {
    header.classList.add("compact");
    return;
  }

  if (window.scrollY > 72) {
    header.classList.add("compact");
  } else {
    header.classList.remove("compact");
  }
}

// Actualizar año del footer automáticamente
window.addEventListener('load', function() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

window.addEventListener("scroll", updateHeaderOnScroll);
window.addEventListener("resize", updateHeaderOnScroll);
updateHeaderOnScroll();
