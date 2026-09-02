/**
 * Hero Title Character Stroke-Draw & Flood-Fill Animation
 */
export function initHeroText() {
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
