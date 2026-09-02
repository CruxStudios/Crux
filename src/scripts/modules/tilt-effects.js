/**
 * 3D Perspective Tilt Physics for Hero Mockup & Project Cards
 */
export function initTiltEffects() {
  // Hero 3D Mockup Tilt
  const mockupWrapper = document.querySelector('.hero-mockup-wrapper');
  const mockupCard = document.querySelector('.mockup-glass-card');

  if (mockupWrapper && mockupCard) {
    mockupWrapper.addEventListener('mousemove', (e) => {
      const rect = mockupWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6; // max 6deg
      const rotateY = ((x - centerX) / centerX) * 6;  // max 6deg

      mockupCard.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    mockupWrapper.addEventListener('mouseleave', () => {
      mockupCard.style.transform = 'perspective(1200px) rotateX(4deg) rotateY(0deg) translateY(0)';
    });
  }

  // Projects Atmospheric Spotlight Position Tracking
  const projectsCard = document.querySelector('.projects-atmospheric-card');
  if (projectsCard) {
    projectsCard.addEventListener('mousemove', (e) => {
      const rect = projectsCard.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      projectsCard.style.setProperty('--mouse-x', `${x.toFixed(1)}%`);
      projectsCard.style.setProperty('--mouse-y', `${y.toFixed(1)}%`);
    });
  }

  // 3D Tilt Physics for Project Cards
  const darkCards = document.querySelectorAll('.project-card-dark');
  darkCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
