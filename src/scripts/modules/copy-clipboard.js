/**
 * Floating Cursor Badge & Email Copy-to-Clipboard
 * Fully compatible with desktop mouse tracking & mobile/touch interactions (iOS & Android).
 */
export function initCopyClipboard() {
  const emailBtn = document.getElementById('email-copy-btn');
  const cursorBadge = document.getElementById('email-cursor-badge');

  if (!emailBtn) return;

  let copyTimeout = null;
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  // Desktop custom cursor tracking (only active with actual mouse / fine pointer)
  if (cursorBadge && isFinePointer) {
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
        const badgeText = cursorBadge.querySelector('.badge-text');
        if (badgeText) badgeText.textContent = 'Copy Email';
      }
    });
  }

  // Cross-device resilient copy function
  async function copyEmailToClipboard(email) {
    // 1. Try modern async Clipboard API if secure context
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(email);
        return true;
      } catch (err) {
        // Fall back to execCommand below
      }
    }

    // 2. iOS Safari & older browser compatible fallback
    try {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.top = '0';
      textarea.style.left = '0';
      textarea.style.width = '2em';
      textarea.style.height = '2em';
      textarea.style.padding = '0';
      textarea.style.border = 'none';
      textarea.style.outline = 'none';
      textarea.style.boxShadow = 'none';
      textarea.style.background = 'transparent';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);

      const isiOS = navigator.userAgent.match(/ipad|ipod|iphone/i);
      if (isiOS) {
        const range = document.createRange();
        range.selectNodeContents(textarea);
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
        textarea.setSelectionRange(0, 999999);
      } else {
        textarea.focus();
        textarea.select();
      }

      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      return successful;
    } catch (err) {
      console.warn('Clipboard write fallback failed:', err);
      return false;
    }
  }

  // Handle click on button (both mobile tap and desktop click)
  emailBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailBtn.getAttribute('data-email') || 'contact@cruxstudios.dev';
    
    await copyEmailToClipboard(email);

    // Subtle mobile haptic feedback if supported
    if ('vibrate' in navigator) {
      try { navigator.vibrate(35); } catch (_) {}
    }

    // Visual feedback directly on the button (vital for mobile touch devices)
    emailBtn.classList.add('is-copied');

    // Visual feedback on the desktop cursor badge
    if (cursorBadge) {
      cursorBadge.classList.add('copied');
      const badgeText = cursorBadge.querySelector('.badge-text');
      if (badgeText) badgeText.textContent = 'Copied!';
    }

    if (copyTimeout) clearTimeout(copyTimeout);
    copyTimeout = setTimeout(() => {
      emailBtn.classList.remove('is-copied');
      if (cursorBadge) {
        cursorBadge.classList.remove('copied');
        const badgeText = cursorBadge.querySelector('.badge-text');
        if (badgeText) badgeText.textContent = 'Copy Email';
      }
    }, 2200);
  });
}
