// ================= YEAR =================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ================= MOBILE NAV =================
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked (mobile)
  navList.addEventListener("click", (e) => {
    const clickedLink = e.target.closest("a");
    if (!clickedLink) return;

    if (navList.classList.contains("open")) {
      navList.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ================= THEME TOGGLE =================
// Uses: :root[data-theme="light"] in CSS
const themeBtn = document.getElementById("themeToggle");
const root = document.documentElement;

function setTheme(theme) {
  if (theme === "light") {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    if (themeBtn) themeBtn.textContent = "☀️ / 🌙";
  } else {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
    if (themeBtn) themeBtn.textContent = "🌙 / ☀️";
  }
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  setTheme("light");
} else {
  setTheme("dark");
}

// Toggle on click
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    setTheme(isLight ? "dark" : "light");
  });
}
<script src="script.js"></script>
