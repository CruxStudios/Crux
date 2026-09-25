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

        // Navbar transition via CSS class to respect light and dark themes
        if (navbar) {
          navbar.classList.toggle('scrolled', scrollY > 40);
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
