window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.style.background = 'rgba(255, 159, 14, 0.13)';
      header.style.backdropFilter = ' blur(4.3px)';

  } else {
    header.style.background = 'rgba(255, 255, 255, 0.8)';
  }
});