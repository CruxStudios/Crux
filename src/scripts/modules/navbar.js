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

  // Floating Navbar Scroll Shadow
  const navbar = document.querySelector('.navbar-island');
  let isScrolling = false;

  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        // Navbar transition via CSS class to respect light and dark themes
        if (navbar) {
          navbar.classList.toggle('scrolled', window.scrollY > 40);
        }
        isScrolling = false;
      });
      isScrolling = true;
    }
  }, { passive: true });
}
