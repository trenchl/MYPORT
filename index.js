const words = ["sleek web experiences.", "responsive interfaces.", "clean, modern UI."];
let wordIndex = 0, charIndex = 0, deleting = false;
const el = document.getElementById("typed-text");

function type() {
  const current = words[wordIndex];
  el.textContent = deleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  if (!deleting && charIndex === current.length + 1) {
    deleting = true;
    setTimeout(type, 1500);
    return;
  }
  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }
  setTimeout(type, deleting ? 40 : 80);
}
type();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));