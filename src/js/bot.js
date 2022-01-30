const $botAnimate = document.querySelector('.bot-animate');
if ($botAnimate) {
  window.addEventListener('scroll', animateHandler);
  animateHandler();
}

function animateHandler () {
  const offsetTop = $botAnimate.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const botHeight = $botAnimate.offsetHeight;

  if (( offsetTop < windowHeight) && (-offsetTop < botHeight) ) {
    $botAnimate.classList.add('bot-animate_active');
  }
}