document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const hero = document.querySelector('.hero');
  
    setTimeout(() => {
      overlay.style.opacity = '0';
      hero.style.opacity = '1';
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 400); // Wait for the opacity transition to finish before hiding
    }, 400); // Keep the overlay for 0.4 seconds
  });
  