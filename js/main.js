/* ============================================================
   PENCILON — main.js
   Cursor · Nav · Scroll Reveal · Counter · Mobile Menu
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. CUSTOM CURSOR ─────────────────────────────────────── */
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  if (dot && ring) {
    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
    });

    const hoverTargets = 'a, button, .work-card, .service-card, .stat-card, .process-item';

    document.querySelectorAll(hoverTargets).forEach(el => {
      el.addEventListener('mouseenter', () => {
        dot.classList.add('hovered');
        ring.classList.add('hovered');
      });
      el.addEventListener('mouseleave', () => {
        dot.classList.remove('hovered');
        ring.classList.remove('hovered');
      });
    });

    // Smooth ring lag
    function animCursor() {
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';

      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';

      requestAnimationFrame(animCursor);
    }
    animCursor();

    // Hide on leave, show on enter
    document.addEventListener('mouseleave', () => {
      dot.style.opacity  = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      dot.style.opacity  = '1';
      ring.style.opacity = '1';
    });
  }

  /* ── 2. STICKY NAV ────────────────────────────────────────── */
  const nav = document.getElementById('main-nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── 3. MOBILE MENU ───────────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.nav-mobile a');

  if (hamburger && mobileMenu) {
    let isOpen = false;

    const toggleMenu = () => {
      isOpen = !isOpen;
      mobileMenu.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';

      const spans = hamburger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '1';
        spans[2].style.transform = '';
      }
    };

    hamburger.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => link.addEventListener('click', () => {
      if (isOpen) toggleMenu();
    }));
  }

  /* ── 4. SCROLL REVEAL ─────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -48px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything
    revealEls.forEach(el => el.classList.add('vis'));
  }

  /* ── 5. COUNTER ANIMATION ─────────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length) {
    const countObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        countObserver.unobserve(entry.target);

        const el       = entry.target;
        const target   = parseFloat(el.dataset.count);
        const suffix   = el.dataset.suffix || '';
        const prefix   = el.dataset.prefix || '';
        const duration = 1600;
        const start    = performance.now();

        const easeOut = t => 1 - Math.pow(1 - t, 3);

        function step(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const val = target * easeOut(progress);

          // Format: if integer show integer, else 1 decimal
          const display = Number.isInteger(target)
            ? Math.round(val)
            : val.toFixed(1);

          el.textContent = prefix + display + suffix;

          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = prefix + target + suffix;
        }

        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });

    counters.forEach(el => countObserver.observe(el));
  }

  /* ── 6. SMOOTH ANCHOR SCROLL ──────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = nav ? nav.getBoundingClientRect().height : 0;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH - 20;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── 7. ACTIVE NAV LINK HIGHLIGHT ─────────────────────────── */
  const sections  = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navAnchors.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(a => a.style.color = '');
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) active.style.color = 'var(--white)';
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => sectionObserver.observe(s));
  }

  /* ── 8. TICKER PAUSE ON HOVER ─────────────────────────────── */
  // Already handled via CSS: .ticker-track:hover { animation-play-state: paused; }

  /* ── 9. PAGE LOAD PROGRESS ────────────────────────────────── */
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity .5s';
      setTimeout(() => loader.remove(), 500);
    });
  }

})();
