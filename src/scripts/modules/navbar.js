/**
 * Navbar Drawer Toggle, Scroll Transitions & Parallax
 */
export function initNavbar() {
  // Mobile Drawer Toggle
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

  // Floating Navbar Scroll Shadow & Hero Parallax
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
}
