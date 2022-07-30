const loader = document.querySelector('.loader-overlay');

export function loaderShow() {
  loader.classList.add('is-open');
}

export function hideLoader() {
  loader.classList.remove('is-open');
}
