/**
 * Scroll Reveal Intersection Observer (Physics Stagger)
 * Built with full SEO crawler transparency and zero cloaking/hidden-content penalties
 */
export function initScrollReveal() {
  const isBot = /bot|google|crawler|spider|robot|crawling|headless|lighthouse|bing|baidu|yandex/i.test(navigator.userAgent) || Boolean(navigator.webdriver);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Search Crawlers & Accessibility:
  // Immediately reveal all elements without hiding them first
  if (isBot || prefersReducedMotion) {
    document.documentElement.classList.add('is-crawler');
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('revealed');
    });
    return;
  }

  // Signal to CSS that interactive JS is running for human users
  document.documentElement.classList.add('js-loaded');

  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px 80px 0px', // wider margin so in-viewport elements fire early
    threshold: 0.05
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add subtle stagger if in a grid
        const parent = entry.target.parentElement;
        const siblings = parent ? Array.from(parent.querySelectorAll('.reveal')) : [];
        const siblingIndex = siblings.indexOf(entry.target);
        const staggerDelay = siblingIndex > 0 ? (siblingIndex % 4) * 60 : 0;

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

  // Crawler & Headless Fail-Safe:
  // If an automated renderer/crawler loads the page and does not scroll,
  // forcefully reveal all remaining elements within 1 second so DOM snapshots are 100% visible
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => {
      el.classList.add('revealed');
    });
  }, 1000);
}

