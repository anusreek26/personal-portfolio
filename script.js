/* ================================
   Personal Portfolio - Main Script
================================ */

/* -------- Smooth Scroll for Navbar -------- */
document.querySelectorAll('.navbar .nav-link').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    }
  });
});

/* -------- Active Navbar Link on Scroll -------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar .nav-link');

function setActiveNav() {
  let scrollPos = window.scrollY + 200;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.navbar .nav-link[href="#${sec.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}
window.addEventListener('scroll', setActiveNav);

/* -------- Dynamic Footer Year -------- */
const yearEl = document.getElementById('y');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* -------- Scroll Reveal Base -------- */
const revealItems = document.querySelectorAll(
  '.section, .panel, .card-line, .portfolio-card, .skill-card'
);
function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;
  revealItems.forEach(item => {
    if (item.getBoundingClientRect().top < triggerPoint) {
      item.classList.add('reveal');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* -------- Hero Section Animations -------- */
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.typing-text');
  const heroDesc = document.querySelector('.hero-description');
  const heroButtons = document.querySelectorAll('.hero-buttons a');
  const heroImg = document.querySelector('.hero-img');

  // Hero Image Pop-up
  if (heroImg) setTimeout(() => heroImg.classList.add('pop-up'), 300);

  // Typing Animation for Subtitle
  if (heroSubtitle) {
    heroSubtitle.style.opacity = '1';
    const textLength = heroSubtitle.textContent.length;
    heroSubtitle.style.animation = `typing ${textLength * 0.1}s steps(${textLength}, end) forwards, blink-caret 0.7s step-end infinite`;
  }

  // Title Slide-in
  if (heroTitle) heroTitle.classList.add('slide-in');

  // Description Fade
  if (heroDesc) {
    heroDesc.classList.add('fade-slide');
    heroDesc.style.animationDelay = '0.2s';
  }

  // Buttons Fade
  heroButtons.forEach((btn, i) => {
    btn.classList.add('fade-slide');
    btn.style.animationDelay = `${0.3 + i * 0.1}s`;
  });

  // -------- Hero Particles Generation --------
  const particleContainer = document.createElement('div');
  particleContainer.className = 'hero-particles';
  document.querySelector('.section-hero').appendChild(particleContainer);

  const particleCount = 30; // increase for more particles
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const size = Math.random() * 6 + 4; // 4px to 10px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 10 + 8}s`; // 8s - 18s
    particle.style.opacity = Math.random() * 0.3 + 0.1;
    particleContainer.appendChild(particle);
  }
});

/* -------- Portfolio Card Hover (Show Description) -------- */
document.querySelectorAll('.portfolio-card').forEach(card => {
  const overlay = card.querySelector('.portfolio-overlay');
  card.addEventListener('mouseenter', () => overlay && (overlay.style.opacity = 1));
  card.addEventListener('mouseleave', () => overlay && (overlay.style.opacity = 0));
});

/* -------- Portfolio Image Zoom -------- */
document.querySelectorAll('.portfolio-card img').forEach(img => {
  img.addEventListener('mouseenter', () => img.style.transform = 'scale(1.04)');
  img.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
});

/* -------- Skills Hover Effect -------- */
document.querySelectorAll('.skill-card').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'translateY(-6px)';
    skill.style.boxShadow = '0 16px 28px rgba(0,0,0,.55)';
  });
  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'translateY(0)';
    skill.style.boxShadow = '';
  });
});

/* -------- Skill Bar Animation on Scroll -------- */
const skillCards = document.querySelectorAll('.skill-card');
function animateSkills() {
  const triggerPoint = window.innerHeight * 0.85;
  skillCards.forEach(card => {
    if (card.getBoundingClientRect().top < triggerPoint) {
      const skillItems = card.querySelectorAll('li');
      skillItems.forEach(li => {
        if (!li.classList.contains('animated')) {
          const skillName = li.textContent.trim().toLowerCase();
          const percentages = {
            python: 95, 'machine learning': 90, 'deep learning': 85,
            java: 80, erpnext: 90, frappe: 85, nlp: 85,
            c: 75, javascript: 80, html: 90, css: 85,
            pandas: 95, numpy: 90, matplotlib: 85, seaborn: 85,
            opencv: 80
          };
          const skillPercent = percentages[skillName] ?? 80;
          const bar = li.querySelector('.skill-bar span');
          if (bar) bar.style.width = skillPercent + '%';
          li.classList.add('animated');
        }
      });
    }
  });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
