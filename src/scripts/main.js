// ==============================================================
// CRUX STUDIOS - MOTION & INTERACTIVE SCRIPTS
// ==============================================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. Hero Title Character Stroke-Draw & Flood-Fill Animation
  initStrokeTextHero();

  function initStrokeTextHero() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    let charCount = 0;
    const processNode = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        if (!text) return document.createTextNode('');
        const fragment = document.createDocumentFragment();
        const tokens = text.split(/(\s+)/);
        tokens.forEach(token => {
          if (!token) return;
          if (/^\s+$/.test(token)) {
            fragment.appendChild(document.createTextNode(token));
          } else {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'stroke-word';
            for (let i = 0; i < token.length; i++) {
              const charSpan = document.createElement('span');
              charSpan.className = 'stroke-char';
              charSpan.style.setProperty('--char-index', charCount.toString());
              charSpan.textContent = token[i];
              wordSpan.appendChild(charSpan);
              charCount++;
            }
            fragment.appendChild(wordSpan);
          }
        });
        return fragment;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const span = document.createElement('span');
        span.className = node.className;
        Array.from(node.childNodes).forEach(child => {
          span.appendChild(processNode(child));
        });
        return span;
      }
      return node.cloneNode(true);
    };

    const newChildren = Array.from(heroTitle.childNodes).map(processNode);
    heroTitle.innerHTML = '';
    newChildren.forEach(child => heroTitle.appendChild(child));
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

  // 5. Mobile Menu Drawer & Hamburger to X Morph
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 6. Floating Navbar Scroll Shadow & Atmospheric Parallax (Optimized 60/120fps)
  const navbar = document.querySelector('.navbar-island');
  const heroMesh = document.querySelector('.hero-mesh-image');
  let isScrolling = false;

  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
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

        // Parallax on hero mesh (only when hero is in view)
        if (heroMesh && scrollY < 1200) {
          heroMesh.style.transform = `translate3d(0, ${(scrollY * 0.08).toFixed(1)}px, 0)`;
        }

        isScrolling = false;
      });
      isScrolling = true;
    }
  }, { passive: true });

  // 7. Interactive Projects Atmospheric Spotlight & 3D Card Physics
  const projectsCard = document.querySelector('.projects-atmospheric-card');
  if (projectsCard) {
    projectsCard.addEventListener('mousemove', (e) => {
      const rect = projectsCard.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      projectsCard.style.setProperty('--mouse-x', `${x.toFixed(1)}%`);
      projectsCard.style.setProperty('--mouse-y', `${y.toFixed(1)}%`);
    });
  }

  // 8. 3D Tilt Physics for Project Cards
  const darkCards = document.querySelectorAll('.project-card-dark');
  darkCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // 9. Floating Cursor Badge & Copy to Clipboard for Email Button
  const emailBtn = document.getElementById('email-copy-btn');
  const cursorBadge = document.getElementById('email-cursor-badge');

  if (emailBtn && cursorBadge) {
    let copyTimeout = null;

    const setPosition = (e) => {
      cursorBadge.style.left = `${e.clientX}px`;
      cursorBadge.style.top = `${e.clientY}px`;
    };

    emailBtn.addEventListener('mouseenter', (e) => {
      setPosition(e);
      cursorBadge.classList.add('visible');
    });

    emailBtn.addEventListener('mousemove', (e) => {
      setPosition(e);
    });

    emailBtn.addEventListener('mouseleave', () => {
      cursorBadge.classList.remove('visible');
      if (copyTimeout) {
        clearTimeout(copyTimeout);
        cursorBadge.classList.remove('copied');
        cursorBadge.querySelector('.badge-text').textContent = 'Copy Email';
      }
    });

    emailBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = 'contact@cruxstudios.dev';
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = email;
          textarea.style.position = 'fixed';
          textarea.style.left = '-999999px';
          textarea.style.top = '-999999px';
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }
      } catch (err) {
        console.warn('Clipboard write failed:', err);
      }

      // Visual Feedback
      cursorBadge.classList.add('copied');
      cursorBadge.querySelector('.badge-text').textContent = 'Copied!';

      if (copyTimeout) clearTimeout(copyTimeout);
      copyTimeout = setTimeout(() => {
        cursorBadge.classList.remove('copied');
        cursorBadge.querySelector('.badge-text').textContent = 'Copy Email';
      }, 2000);
    });
  }

});

