import Marquee3k from 'marquee3000';

window.addEventListener('load', () => {
  const $marquee3k = document.querySelector('.marquee3k');

  if ($marquee3k) {
    const isDesktop = window.innerWidth > 1280;

    $marquee3k.dataset.speed = isDesktop ? '3.5' : '1.5';
    
    Marquee3k.init();
  }
});