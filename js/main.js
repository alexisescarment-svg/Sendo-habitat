/* ============================================
   CUBA NAUTA — main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll ──────────────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar && !navbar.classList.contains('scrolled')) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ── Mobile menu ────────────────────────────────────────
  const menuToggle = document.getElementById('menuToggle');
  const navLinks   = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
      });
    });
  }

  // ── Scroll fade-in ─────────────────────────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ── Stagger children ───────────────────────────────────
  const staggerObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(':scope > *').forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.1}s`;
          child.classList.add('visible');
        });
        staggerObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.stagger-children').forEach(el => {
    el.querySelectorAll(':scope > *').forEach(child => child.classList.add('fade-in'));
    staggerObs.observe(el);
  });

  // ── Circuit filters ────────────────────────────────────
  const filterBtns = document.querySelectorAll('#filterBar .filter-btn');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.circuit-full-card').forEach(card => {
          const cats = card.dataset.category || '';
          card.style.display = (filter === 'all' || cats.includes(filter)) ? '' : 'none';
        });
      });
    });
  }

  // ── Blog category filters ──────────────────────────────
  const blogFilterBtns = document.querySelectorAll('.blog-filters .filter-btn');
  if (blogFilterBtns.length) {
    blogFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        blogFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.article-card').forEach(card => {
          const tag = (card.dataset.category || '').toLowerCase();
          card.style.display = (filter === 'all' || tag === filter) ? '' : 'none';
        });
      });
    });
  }

  // ── Forum category filter ──────────────────────────────
  const catBtns = document.querySelectorAll('#forumCategoriesBar .cat-btn');
  if (catBtns.length) {
    catBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        document.querySelectorAll('.thread-card').forEach(card => {
          card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
        });
      });
    });
  }

  // ── Forum search ───────────────────────────────────────
  const forumSearch = document.getElementById('forumSearch');
  if (forumSearch) {
    forumSearch.addEventListener('input', () => {
      const q = forumSearch.value.toLowerCase();
      document.querySelectorAll('.thread-card').forEach(card => {
        const text = card.querySelector('.thread-title')?.textContent.toLowerCase() || '';
        card.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  // ── Star rating (blog form) ────────────────────────────
  const stars = document.querySelectorAll('#starRating .fa-star');
  const ratingInput = document.getElementById('blogRating');
  if (stars.length && ratingInput) {
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const val = parseInt(star.dataset.value);
        ratingInput.value = val;
        stars.forEach(s => {
          s.classList.toggle('active', parseInt(s.dataset.value) <= val);
        });
      });
      star.addEventListener('mouseenter', () => {
        const val = parseInt(star.dataset.value);
        stars.forEach(s => {
          s.classList.toggle('hover', parseInt(s.dataset.value) <= val);
        });
      });
    });
    document.getElementById('starRating')?.addEventListener('mouseleave', () => {
      stars.forEach(s => s.classList.remove('hover'));
    });
    // Init 5 stars
    stars.forEach(s => s.classList.add('active'));
  }

  // ── Contact form ───────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      showToast('Merci ! Votre demande a bien été envoyée. Nous vous répondons sous 24h.', 'success');
      contactForm.reset();
    });
  }

  // ── Newsletter form ────────────────────────────────────
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      showToast('Inscription confirmée ! Merci de rejoindre la communauté Cuba Nauta.', 'success');
      newsletterForm.reset();
    });
  }

  // ── Toast notification ─────────────────────────────────
  window.showToast = (message, type = 'info') => {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i> ${message}`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  };

});
