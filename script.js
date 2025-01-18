// Select the hamburger menu and the nav menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav');

// Check if both elements exist
if (hamburgerMenu && navMenu) {
  // Add click event listener to toggle the active class
  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Show/hide the nav
    hamburgerMenu.classList.toggle('toggle'); // Animate hamburger icon
  });
} else {
  console.error('Error: Hamburger menu or nav menu not found!');
}
const faders = document.querySelectorAll('.fade-in');

const options = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, options);

faders.forEach(fader => appearOnScroll.observe(fader));
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.transform = 'scale(1.1)';
      element.style.transition = 'transform 0.3s';
    });
    element.addEventListener('mouseout', () => {
      element.style.transform = 'scale(1)';
    });
  });
  