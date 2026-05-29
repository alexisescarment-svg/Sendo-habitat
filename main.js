/* ============================================================
   SENDO HABITAT — Main JavaScript
   Renovation & Construction — Abidjan, Côte d'Ivoire
   ============================================================ */

'use strict';

/* ── Scroll Progress Bar ──────────────────────────────────── */
(function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();

/* ── Navigation Scroll Behavior ──────────────────────────── */
(function initNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mark active link
  const links = nav.querySelectorAll('.nav-links a:not(.nav-cta)');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ── Mobile Burger Menu ───────────────────────────────────── */
(function initBurger() {
  const burger = document.querySelector('.nav-burger');
  const drawer = document.getElementById('nav-drawer');
  if (!burger || !drawer) return;

  function openMenu() {
    burger.classList.add('open');
    drawer.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    burger.classList.remove('open');
    drawer.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close on drawer link click
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
})();

/* ── Reveal Animations (IntersectionObserver) ─────────────── */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay;
        if (delay) {
          el.style.transitionDelay = (parseInt(delay) * 0.1) + 's';
        }
        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -48px 0px'
  });

  elements.forEach(el => observer.observe(el));
})();

/* ── Animated Number Counters ─────────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const value = target * eased;

      if (Number.isInteger(target)) {
        el.textContent = Math.round(value) + suffix;
      } else {
        el.textContent = value.toFixed(1) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  if (!('IntersectionObserver' in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ── Portfolio Filter ─────────────────────────────────────── */
(function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');
  if (!filterBtns.length || !items.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.filter;

      items.forEach(item => {
        if (cat === 'all' || item.dataset.cat === cat) {
          item.classList.remove('hidden');
          item.style.animation = 'none';
          item.offsetHeight; // reflow
          item.style.animation = '';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
})();

/* ── Contact Form Submission ──────────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const successMsg = document.getElementById('form-success');
  const submitBtn = form.querySelector('.form-submit');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours…';
    }

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.style.display = 'none';
        if (successMsg) {
          successMsg.classList.add('visible');
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Réessayer';
      }
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.');
    }
  });
})();

/* ── Back to Top Button ───────────────────────────────────── */
(function initBackTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;

  function onScroll() {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Marquee Duplication ──────────────────────────────────── */
(function initMarquee() {
  const tracks = document.querySelectorAll('.marquee-track');
  tracks.forEach(track => {
    // Duplicate content for seamless infinite loop
    const original = track.innerHTML;
    track.innerHTML = original + original;
  });
})();

/* ── Smooth anchor scrolling ──────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
