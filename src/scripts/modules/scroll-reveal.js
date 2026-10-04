/**
 * Scroll Reveal Intersection Observer (Physics Stagger)
 */
export function initScrollReveal() {
  // Signal to CSS that JS is running — enables hide-then-reveal behavior.
  // Without this class, .reveal elements stay visible (crawler/no-JS fallback).
  document.documentElement.classList.add('js-loaded');

  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px 60px 0px', // wider margin so in-viewport elements fire immediately
    threshold: 0.05
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
}
