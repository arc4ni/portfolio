const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

const sections = document.querySelectorAll('section[id], .about');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--olive)' : '';
  });
});

const expGrid = document.querySelector('.exp-grid');
const expLine = document.getElementById('expLine');

if (expGrid && expLine) {
  const updateLine = () => {
    const cards = expGrid.querySelectorAll('.exp-card');
    const lastCard = cards[cards.length - 1];
    const gridTop = expGrid.getBoundingClientRect().top + window.scrollY;
    const lastCardBottom = lastCard.getBoundingClientRect().bottom + window.scrollY;
    const maxHeight = lastCardBottom - gridTop;

    const scrolled = window.scrollY + window.innerHeight * 0.75;
    const progress = Math.min(Math.max(scrolled - gridTop, 0), maxHeight);
    expLine.style.height = progress + 'px';
  };

  window.addEventListener('scroll', updateLine, { passive: true });
  updateLine();
}