window.addEventListener('scroll', () => {
  const fades = document.querySelectorAll('.fade-in');
  fades.forEach(fade => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fade.style.animationPlayState = 'running';
    }
  });
});
