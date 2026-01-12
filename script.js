const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const toggleBtn = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

toggleBtn?.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  toggleBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close menu on link click (mobile)
document.querySelectorAll(".nav-list a").forEach((a) => {
  a.addEventListener("click", () => {
    navList.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
  });
});
