const $callbackPopup = document.querySelector('.callback-popup');

if ($callbackPopup) {
  const $body = document.querySelector('.body');

  const $openBtns = document.querySelectorAll('.open-callback');
  $openBtns.forEach($btn => {
    $btn.addEventListener('click', e => {
      e.preventDefault();
      
      $callbackPopup.classList.add('callback-popup_active');
      $body.classList.add('body_lock');
    });
  });

  const $closePopup = $callbackPopup.querySelector('.callback-popup__close');
  $closePopup.addEventListener('click', () => {
    $callbackPopup.classList.remove('callback-popup_active');
    $body.classList.remove('body_lock');
  });

  $callbackPopup.addEventListener('click', e => {
    if (e.target === $callbackPopup) {
      $callbackPopup.classList.remove('callback-popup_active');
      $body.classList.remove('body_lock');
    }
  });
}