// ==============================================================
// CRUX STUDIOS - MOTION & INTERACTION ORCHESTRATOR
// ==============================================================

import { initHeroText } from './modules/hero-text.js';
import { initScrollReveal } from './modules/scroll-reveal.js';
import { initFaqAccordion } from './modules/accordion.js';
import { initTiltEffects } from './modules/tilt-effects.js';
import { initNavbar } from './modules/navbar.js';
import { initCopyClipboard } from './modules/copy-clipboard.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Hero Title Character Stroke-Draw & Fill Animation
  initHeroText();

  // 2. Scroll Reveal Observer (Framer-matched physics)
  initScrollReveal();

  // 3. FAQ 2-Column Interactive Accordion
  initFaqAccordion();

  // 4. 3D Perspective Tilt & Atmospheric Spotlight
  initTiltEffects();

  // 5. Floating Island Navbar & Mobile Drawer
  initNavbar();

  // 6. Floating Cursor Badge & Copy-to-Clipboard
  initCopyClipboard();
});
