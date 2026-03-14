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

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
  const [s0, s1, s2] = burger.querySelectorAll('span');
  if (open) {
    s0.style.transform = 'translateY(6px) rotate(45deg)';
    s1.style.opacity   = '0';
    s2.style.transform = 'translateY(-6px) rotate(-45deg)';
  } else {
    [s0, s1, s2].forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
}));

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
