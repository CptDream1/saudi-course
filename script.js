// script.js
document.addEventListener("DOMContentLoaded", () => {
  // ========== SIDEBAR DROPDOWNS ==========
  const parents = document.querySelectorAll(".nav-parent");

  parents.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      if (!targetId) return;

      const subMenu = document.getElementById(targetId);
      if (!subMenu) return;

      const isOpen = subMenu.classList.toggle("open");
      btn.classList.toggle("open", isOpen);
    });
  });

  // ========== ANSWER TOGGLES ==========
  const answerButtons = document.querySelectorAll(".answer-toggle");

  answerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answerId = btn.getAttribute("data-answer");
      if (!answerId) return;

      const panel = document.getElementById(answerId);
      if (!panel) return;

      const isOpen = panel.classList.toggle("open");
      const labelSpan = btn.querySelector("span");
      if (labelSpan) {
        labelSpan.textContent = isOpen ? "Hide answers" : "Show answers";
      }
    });
  });
});
