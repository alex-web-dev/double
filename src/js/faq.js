const $faqItems = document.querySelectorAll('.faq-item');
$faqItems.forEach($item => {
  const $header = $item.querySelector('.faq-item__header');
  const $main = $item.querySelector('.faq-item__main');
  $header.addEventListener('click', () => {
    $item.classList.toggle('faq-item_active');

    if ($item.classList.contains('faq-item_active')) {
      $main.style.height = `${$main.scrollHeight}px`;
    } else {
      $main.style.height = '0px';
    }
  });
});