const $search = document.querySelector('.search');

if ($search) {
  const $togglesSearch = document.querySelectorAll('.toggle-search');
  $togglesSearch.forEach($toggle => {
    $toggle.addEventListener('click', () => {
      $search.classList.toggle('search_active');
    });
  });

  const $closeSearch = $search.querySelector('.search__close');
  $closeSearch.addEventListener('click', () => {
    $search.classList.remove('search_active');
  });
}