/* ============================================================
   SENDO HABITAT — INTERACTIONS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navigation scroll state ── */
  const nav = document.querySelector('.nav');
  const backTop = document.querySelector('.back-top');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav?.classList.toggle('scrolled', y > 60);
    backTop?.classList.toggle('show', y > 450);
  }, { passive: true });

  backTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Hero image entrance ── */
  const hero = document.querySelector('.hero');
  if (hero) setTimeout(() => hero.classList.add('loaded'), 80);

  /* ── Mobile menu ── */
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.nav-mobile');
  const burgerLines = burger?.querySelectorAll('span');

  const closeMobileMenu = () => {
    mobileMenu?.classList.remove('open');
    if (burgerLines) {
      burgerLines[0].style.transform = '';
      burgerLines[1].style.opacity = '';
      burgerLines[2].style.transform = '';
    }
  };

  burger?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.toggle('open');
    if (burgerLines) {
      burgerLines[0].style.transform = isOpen ? 'translateY(7px) rotate(45deg)' : '';
      burgerLines[1].style.opacity  = isOpen ? '0' : '';
      burgerLines[2].style.transform = isOpen ? 'translateY(-7px) rotate(-45deg)' : '';
    }
  });

  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));

  /* ── Active nav link ── */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Scroll reveal ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -36px 0px' });

  revealEls.forEach(el => revealObs.observe(el));

  /* ── Counter animation ── */
  const counters = document.querySelectorAll('[data-count]');
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => countObs.observe(el));

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1900;
    const start = performance.now();

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ── Portfolio filter ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pfItems = document.querySelectorAll('.pf-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      pfItems.forEach(item => {
        const show = cat === 'all' || item.dataset.cat === cat;
        item.style.display = show ? '' : 'none';
      });
    });
  });

  /* ── Contact form ── */
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = 'Message envoyé ✓';
    btn.style.background = '#2e7d32';
    btn.disabled = true;

    const name    = form.querySelector('[name="name"]')?.value || '';
    const phone   = form.querySelector('[name="phone"]')?.value || '';
    const service = form.querySelector('[name="service"]')?.value || '';
    const msg     = form.querySelector('[name="message"]')?.value || '';
    const waText  = encodeURIComponent(
      `Bonjour Sendo Habitat,\n\nJe m'appelle ${name}.\nService souhaité : ${service}.\n${msg}\n\nMon téléphone : ${phone}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/22507048835490?text=${waText}`, '_blank');
    }, 400);

    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3200);
  });

});
