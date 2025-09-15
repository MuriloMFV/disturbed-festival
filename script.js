document.querySelectorAll('.card-artistas').forEach(card => {
  const img = card.querySelector('.artist-img');
  const hoverSrc = img.getAttribute('data-hover');

  card.style.setProperty('--hover-img', `url(${hoverSrc})`);
  card.querySelector('.artist-img').parentElement.style.position = 'relative';

  card.addEventListener('mouseenter', () => {
    card.style.setProperty('--hover-img', `url(${hoverSrc})`);
    card.style.backgroundImage = `url(${hoverSrc})`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.backgroundImage = 'none';
  });
});
