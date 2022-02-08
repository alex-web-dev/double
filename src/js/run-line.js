import Marquee3k from 'marquee3000';

window.addEventListener('load', () => {
  setRunSpeed({
    selector: '.marquee3k-contacts',
    desktopSpeed: 3.5,
    mobileSpeed: 1.5
  });

  setRunSpeed({
    selector: '.marquee3k-404',
    desktopSpeed: 2.8,
    mobileSpeed: 1
  });

  Marquee3k.init();
});

function setRunSpeed({selector, desktopSpeed = 3, mobileSpeed = 2}) {
  const $marquee3k = document.querySelector(selector);

  if ($marquee3k) {
    const isDesktop = window.innerWidth > 1280;

    $marquee3k.dataset.speed = isDesktop ? desktopSpeed : mobileSpeed;
  }
}