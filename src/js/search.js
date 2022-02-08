const $search = document.querySelector('.search');

if ($search) {
  const $togglesSearch = document.querySelectorAll('.toggle-search');
  $togglesSearch.forEach($toggle => {
    $toggle.addEventListener('click', () => {
      setTimeout(() => $search.classList.toggle('search_active'), 50);
    });
  });

  const $closeSearch = $search.querySelector('.search__close');
  $closeSearch.addEventListener('click', () => {
    $search.classList.remove('search_active');
  });

  window.addEventListener('click', e => {
    if (!e.target.classList.contains('search') && !e.target.closest('.search')) {
      $search.classList.remove('search_active');
    }
  });
}