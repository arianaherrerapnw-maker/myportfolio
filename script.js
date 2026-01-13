// script.js

document.addEventListener("DOMContentLoaded", () => {
  // ===== Mobile nav toggle =====
  const toggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (toggle && navList) {
    const closeMenu = () => {
      navList.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      navList.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
    };

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = navList.classList.contains("open");
      isOpen ? closeMenu() : openMenu();
    });

    // Close menu when clicking a nav link
    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      const clickedInsideNav = navList.contains(e.target) || toggle.contains(e.target);
      if (!clickedInsideNav) closeMenu();
    });

    // Close menu with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Close menu if window is resized to desktop width
    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) closeMenu();
    });
  }

  // ===== Footer year (optional) =====
  // If you already set the year inline in HTML, you can delete this part.
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
