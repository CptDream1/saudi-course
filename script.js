// ===== SIDEBAR / MOBILE MENU =====
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-hidden");
  });
}

// ===== DARK MODE TOGGLE =====
const toggle = document.getElementById("dark-toggle");
const body = document.body;

// Load saved theme (if toggle exists on this page)
if (toggle) {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      body.classList.contains("dark") ? "dark" : "light"
    );
  });
} else {
  // If no toggle on this page, still apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }
}

// ===== SHOW / HIDE ANSWERS =====
document.querySelectorAll(".answer-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.answer;
    const ansBox = document.getElementById(id);
    if (!ansBox) return;
    ansBox.style.display =
      ansBox.style.display === "block" ? "none" : "block";
  });
});
