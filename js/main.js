/* ============================================================
   SENDO HABITAT — INTERACTIONS (REDESIGN)
   parallax · IntersectionObserver stagger · compteurs · progress bar
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Scroll progress bar ── */
  let progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
  }

  /* ── Éléments scroll ── */
  const nav = document.querySelector('.nav');
  const backTop = document.querySelector('.back-top');
  const heroBg = document.querySelector('.hero-bg');
  const impactBg = document.querySelector('.impact-bg');

  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    /* progress bar */
    const progress = docHeight > 0 ? (y / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';

    /* nav + back-to-top */
    nav?.classList.toggle('scrolled', y > 60);
    backTop?.classList.toggle('show', y > 450);

    /* parallax léger sur le hero — translateY à 30% de scrollY */
    if (!prefersReduced) {
      if (heroBg && y < window.innerHeight) {
        heroBg.style.transform = `translateY(${y * 0.3}px)`;
      }
      /* parallax léger sur la section impact */
      if (impactBg) {
        const rect = impactBg.parentElement.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          const offset = (window.innerHeight - rect.top) * 0.08;
          impactBg.style.transform = `translateY(${offset}px)`;
        }
      }
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  backTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Hero loaded state ── */
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

  /* ── Scroll reveal + stagger automatique des enfants ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        /* délais échelonnés automatiques sur les .stagger-item enfants */
        const staggerKids = entry.target.querySelectorAll('.stagger-item');
        staggerKids.forEach((kid, i) => {
          kid.style.transitionDelay = (i * 0.12) + 's';
          kid.classList.add('visible');
        });

        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObs.observe(el));

  /* ── Stagger-items isolés (sans parent .reveal) ── */
  const looseStaggers = document.querySelectorAll('.stagger-item');
  const staggerObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
        entry.target.classList.add('visible');
        staggerObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  looseStaggers.forEach(el => {
    /* n'observe que ceux sans parent reveal déjà géré */
    if (!el.closest('.reveal, .reveal-left, .reveal-right')) staggerObs.observe(el);
  });

  /* ── Compteurs animés [data-count] ── */
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
    if (prefersReduced) { el.textContent = prefix + target + suffix; return; }
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

  /* ── Contact form → WhatsApp ── */
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
