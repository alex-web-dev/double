const $header = document.querySelector('.header');
const $headerMenu = $header.querySelector('.header__mobile-menu');
const $menuToggle = $headerMenu.querySelector('.mobile-menu__toggle');

$menuToggle.addEventListener('click', () => {
  $headerMenu.classList.toggle('mobile-menu_active');
});