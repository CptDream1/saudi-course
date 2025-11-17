// Answer toggle logic – used inside lessons.
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.answer-toggle');
  if (!btn) return;

  const id = btn.getAttribute('data-answer');
  if (!id) return;

  const ans = document.getElementById(id);
  if (!ans) return;

  ans.classList.toggle('visible');
});
