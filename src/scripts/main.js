// ==============================================================
// CRUX STUDIOS - MOTION & INTERACTIVE SCRIPTS
// ==============================================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. "Snake Line to Full Letter" Character Growth Animation on Hero Title
  initSnakeTextAnimation();

  function initSnakeTextAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    // Split text into words and characters while preserving highlight span
    const highlightSpan = heroTitle.querySelector('.title-highlight');
    const highlightText = highlightSpan ? highlightSpan.textContent : '';

    // Full text structure
    const rawHTML = heroTitle.innerHTML;

    // We parse nodes carefully:
    let globalCharIndex = 0;

    function processTextNode(text, isHighlight = false) {
      const words = text.trim().split(/\s+/);
      const wordSpans = words.map(word => {
        if (!word) return '';
        const charSpans = word.split('').map(char => {
          const delayIndex = globalCharIndex++;
          return `<span class="snake-char" style="--char-index: ${delayIndex};">${char}</span>`;
        }).join('');
        return `<span class="split-word ${isHighlight ? 'title-highlight' : ''}">${charSpans}</span>`;
      });
      return wordSpans.join('<span class="split-space">&nbsp;</span>');
    }

    const part1 = "We build & launch your ";
    const part2 = "web & mobile app.";

    const animatedPart1 = processTextNode(part1, false);
    const animatedPart2 = processTextNode(part2, true);

    heroTitle.innerHTML = `${animatedPart1}<span class="split-space">&nbsp;</span>${animatedPart2}`;
    heroTitle.classList.add('snake-animated');
  }

  // 2. Scroll Reveal Intersection Observer (Framer-Matched Physics)
  const revealElements = document.querySelectorAll('.reveal');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add subtle stagger if in a grid
        const parent = entry.target.parentElement;
        const siblings = parent ? Array.from(parent.querySelectorAll('.reveal')) : [];
        const siblingIndex = siblings.indexOf(entry.target);
        const staggerDelay = siblingIndex > 0 ? (siblingIndex % 4) * 70 : 0;

        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, staggerDelay);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // 3. Interactive FAQ Accordion
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other accordions
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.accordion-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      if (isActive) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 4. 3D Perspective Tilt on Hero Mockup
  const mockupWrapper = document.querySelector('.hero-mockup-wrapper');
  const mockupCard = document.querySelector('.mockup-glass-card');

  if (mockupWrapper && mockupCard) {
    mockupWrapper.addEventListener('mousemove', (e) => {
      const rect = mockupWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6; // max 6deg
      const rotateY = ((x - centerX) / centerX) * 6;  // max 6deg

      mockupCard.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    mockupWrapper.addEventListener('mouseleave', () => {
      mockupCard.style.transform = 'perspective(1200px) rotateX(4deg) rotateY(0deg) translateY(0)';
    });
  }

  // 5. Mobile Menu Drawer
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // 6. Floating Navbar Scroll Shadow & Atmospheric Parallax
  const navbar = document.querySelector('.navbar-island');
  const heroMesh = document.querySelector('.hero-mesh-image');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar transition
    if (navbar) {
      if (scrollY > 40) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.04)';
      }
    }

    if (heroMesh) {
      heroMesh.style.transform = `translateY(${scrollY * 0.08}px)`;
    }
  });

});
