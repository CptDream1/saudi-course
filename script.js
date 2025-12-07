// Sidebar & Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-hidden");
});

// Dark Mode Toggle + LocalStorage Save
const toggle = document.getElementById("dark-toggle");
const body = document.body;

// Load Saved Mode
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
});

// Show/Hide Answer Buttons
document.querySelectorAll(".answer-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.answer;
    const ansBox = document.getElementById(id);
    ansBox.style.display =
      ansBox.style.display === "block" ? "none" : "block";
  });
});
