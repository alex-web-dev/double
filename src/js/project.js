const $projectsContent = document.querySelectorAll('.project_scroll_hide .project__content');
$projectsContent.forEach($item => scrollOpacityHandler($item, 600));

function scrollOpacityHandler($elem, range) {
  window.addEventListener('scroll', () => {
    const isDesktop = window.innerWidth > 1280;
    if (!isDesktop) {
      $elem.style.opacity = 1;
      return;
    }

    const elemOffsetTop = $elem.getBoundingClientRect().top;
    const height = $elem.clientHeight;
    const offset = height / 5;
    const result = (elemOffsetTop - offset + range) / range;

    if (result > 1) {
      $elem.style.opacity = 1;
    } else if (result < 0) {
      $elem.style.opacity = 0;
    } else {
      $elem.style.opacity = result;
    }
  });
}