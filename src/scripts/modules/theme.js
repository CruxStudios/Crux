/**
 * Crux Studios - Dark / Light Theme Controller
 * Singleton design: only one click handler ever lives on document,
 * safe against Vite HMR re-executions stacking duplicate listeners.
 */

const THEME_STORAGE_KEY = 'crux_theme';
const HANDLER_KEY = '__crux_theme_handler__';

export function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') return saved;
  return 'light';
}

export function setTheme(theme, persist = true) {
  document.documentElement.setAttribute('data-theme', theme);
  if (persist) {
    try { localStorage.setItem(THEME_STORAGE_KEY, theme); } catch (_) {}
  }
  updateToggleButtons(theme);
}

function updateToggleButtons(theme) {
  const isDark = theme === 'dark';
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    btn.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    btn.classList.toggle('is-dark', isDark);
  });
}

function handleThemeClick(e) {
  if (!e.target.closest('[data-theme-toggle]')) return;
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  setTheme(current === 'dark' ? 'light' : 'dark', true);
}

export function initTheme() {
  setTheme(getPreferredTheme(), false);

  // Remove any previously registered handler before adding a new one.
  // This prevents HMR re-executions from stacking duplicate listeners.
  if (window[HANDLER_KEY]) {
    document.removeEventListener('click', window[HANDLER_KEY]);
  }
  window[HANDLER_KEY] = handleThemeClick;
  document.addEventListener('click', handleThemeClick);
}
