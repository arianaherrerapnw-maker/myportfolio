// script.js

document.addEventListener("DOMContentLoaded", () => {
  // ===== Footer year =====
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== Mobile nav =====
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ===== Theme toggle (works across pages) =====
  const themeBtn = document.getElementById("themeToggle"); // must exist on BOTH pages
  const root = document.documentElement;

  const applyTheme = (theme) => {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      if (themeBtn) themeBtn.textContent = "☀️ / 🌙";
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
      if (themeBtn) themeBtn.textContent = "🌙 / ☀️";
    }
  };

  // Load saved theme, otherwise use system preference
  const saved = localStorage.getItem("theme");
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    applyTheme(prefersLight ? "light" : "dark");
  }

  // Toggle on click
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isLight = root.getAttribute("data-theme") === "light";
      applyTheme(isLight ? "dark" : "light");
    });
  }
});
