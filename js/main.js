/* ============================================
   CUBA NAUTA — main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Navbar scroll behaviour ---- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const checkScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
      } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('transparent');
      }
    };
    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
  }

  /* ---- Mobile menu toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = toggle.querySelectorAll('span');
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }

  /* ---- Active nav link ---- */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ---- Fade-in on scroll (Intersection Observer) ---- */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => obs.observe(el));

  /* ---- Staggered children animation ---- */
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    const children = parent.children;
    Array.from(children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.1}s`;
      child.classList.add('fade-in');
    });
  });

  /* ---- Smooth counter animation ---- */
  const counters = document.querySelectorAll('[data-count]');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.count);
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current) + (el.dataset.suffix || '');
          if (current >= target) clearInterval(timer);
        }, 16);
        counterObs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));

  /* ---- Forum category filter ---- */
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      document.querySelectorAll('.thread-card[data-cat]').forEach(card => {
        card.style.display = (!cat || cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
      });
    });
  });

  /* ---- Circuit filter buttons ---- */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.circuit-card[data-type]').forEach(card => {
        card.parentElement.style.display =
          (!filter || filter === 'all' || card.dataset.type === filter) ? '' : 'none';
      });
    });
  });

  /* ---- Forum search ---- */
  const forumSearch = document.getElementById('forum-search');
  if (forumSearch) {
    forumSearch.addEventListener('input', () => {
      const q = forumSearch.value.toLowerCase().trim();
      document.querySelectorAll('.thread-card').forEach(card => {
        const title = card.querySelector('.thread-title-link')?.textContent.toLowerCase() || '';
        const excerpt = card.querySelector('.thread-excerpt')?.textContent.toLowerCase() || '';
        card.style.display = (title.includes(q) || excerpt.includes(q)) ? '' : 'none';
      });
    });
  }

  /* ---- Contact form ---- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Envoi en cours…';
      await new Promise(r => setTimeout(r, 1200));
      contactForm.style.display = 'none';
      const success = document.querySelector('.form-success');
      if (success) success.classList.add('show');
    });
  }

  /* ---- Toast helper ---- */
  window.showToast = (msg, type = '') => {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.className = `toast ${type}`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => toast.classList.add('show'));
    });
    setTimeout(() => toast.classList.remove('show'), 3800);
  };

  /* ---- Newsletter form ---- */
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        input.value = '';
        window.showToast('Merci ! Vous êtes bien inscrit(e) à notre newsletter.', 'success');
      }
    });
  });

});
