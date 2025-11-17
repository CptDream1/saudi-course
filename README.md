# Saudi Arabic Course – Najdi / Hijāzi with a Gulf Twist

This is a **self-study Arabic course website** designed for a
British-Pakistani Muslim from Birmingham who wants to speak **real Saudi / Khaleeji Arabic** – not robotic textbook fuṣḥā.

The course focuses on a **functional dialect blend**:

- **40% Najdi** (Riyadh / Qassim style – clear grammar, classic Saudi)
- **30% Hijāzi** (Makkah / Madinah / Jeddah – soft, friendly)
- **20% Gulf** (Kuwait, Qatar, UAE, Bahrain, Oman vibes)
- **10% MSA** (for Islamic terms & formal situations)

The goal: after ~6 months of study, reach around **A2 → early B1** speaking level,  
enough to have **real conversations** with:

- Saudis, Yemenis, Syrians, Palestinians, Jordanians, Egyptians, Khaleejis, Sudanese…
- In **Birmingham / UK**, and on trips for **ʿUmrah, Ḥajj, and general travel**.

---

## 🧱 Tech stack

Very simple on purpose:

- **HTML** – one page per lesson, plus a home page.
- **CSS** – single global stylesheet (`styles.css`).
- **JavaScript** – single global script (`script.js`) for small UX features (e.g. show/hide answers).
- No frameworks, no build tools, no backend.  
- Perfect for **GitHub Pages** deployment.

---

## 📂 Project structure

Suggested repo layout:

```text
saudi-course/
  index.html        # Home page with sidebar + course overview
  styles.css        # Shared styling for all pages
  script.js         # Shared JS (answer toggles etc.)
  lessons/
    lesson01.html   # Lesson 1 – Greetings & Introductions
    lesson02.html   # Lesson 2 – Family & People
    lesson03.html   # Lesson 3 – Daily Routine
    ...
    lesson36.html   # Lesson 36 – Final Project & Wrap-up
  README.md
