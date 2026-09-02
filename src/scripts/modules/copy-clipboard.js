/**
 * Floating Cursor Badge & Email Copy-to-Clipboard
 */
export function initCopyClipboard() {
  const emailBtn = document.getElementById('email-copy-btn');
  const cursorBadge = document.getElementById('email-cursor-badge');

  if (!emailBtn || !cursorBadge) return;

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
      const badgeText = cursorBadge.querySelector('.badge-text');
      if (badgeText) badgeText.textContent = 'Copy Email';
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
    const badgeText = cursorBadge.querySelector('.badge-text');
    if (badgeText) badgeText.textContent = 'Copied!';

    if (copyTimeout) clearTimeout(copyTimeout);
    copyTimeout = setTimeout(() => {
      cursorBadge.classList.remove('copied');
      if (badgeText) badgeText.textContent = 'Copy Email';
    }, 2000);
  });
}
