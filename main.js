/* ═══════════════════════════════════════════════════════
   Friedens-Yoga-Akademie · main.js
   ═══════════════════════════════════════════════════════ */

// ── Nav: scroll shadow ──────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Nav: mobile burger ──────────────────────────────────
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');
const navClose = document.querySelector('.nav-close');

function closeMenu() {
  navLinks.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function openMenu() {
  navLinks.classList.add('open');
  burger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

burger.addEventListener('click', () => {
  if (navLinks.classList.contains('open')) { closeMenu(); } else { openMenu(); }
});

navClose.addEventListener('click', closeMenu);

navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Schließen beim Klick auf das Overlay (rechts vom Menü)
navLinks.addEventListener('click', (e) => {
  if (e.target === navLinks) closeMenu();
});

// ── Scroll reveal ───────────────────────────────────────
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    io.unobserve(entry.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  // Stagger siblings inside grid
  const parent = el.parentElement;
  const siblings = [...parent.querySelectorAll('.reveal')];
  const idx = siblings.indexOf(el);
  if (idx > 0) el.style.transitionDelay = `${idx * 0.12}s`;
  io.observe(el);
});
