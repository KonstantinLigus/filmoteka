import { renderMovieCards } from './createLibrary';
// import { refs } from './modalOpenClose';
// import { onModalOpen } from './modalOpenClose';

const libBtnWatch = document.querySelector('[data-action="watched"]');
const libBtnQueue = document.querySelector('[data-action="queue"]');
// const backdrop = document.querySelector('.backdrop');
// export const locationURl = window.location.toString();

// const btnRefs = {
//   addQueue: document.querySelector('.modal-button-queue'),
//   addWatched: document.querySelector('.modal-button-watched'),
// };

window.addEventListener('DOMContentLoaded', onLibraryLoad);
libBtnWatch.addEventListener('click', onClickLibBtnWatch);
libBtnQueue.addEventListener('click', onClickLibBtnQueue);

export function onLibraryLoad(event) {
  const movies = JSON.parse(localStorage.getItem('watchedCard'));
  renderMovieCards(movies);
}

export function onClickLibBtnWatch(event) {
  libBtnWatch.classList.add('disabled');
  libBtnQueue.classList.remove('disabled');
  libBtnWatch.disabled = event.target;
  libBtnQueue.disabled = !event.target;
  onLibraryLoad();
}

export function onClickLibBtnQueue(event) {
  libBtnQueue.classList.add('disabled');
  libBtnWatch.classList.remove('disabled');
  libBtnQueue.disabled = event.target;
  libBtnWatch.disabled = !event.target;

  const movies = JSON.parse(localStorage.getItem('queuedCard'));
  renderMovieCards(movies);
  //   if (backdrop.classList.contains('is-hidden')) {
  //     console.log(backdrop.classList.contains('is-hidden'));
  //     const removeQueue = document.querySelector('.data-modal-queue');
  //     const removeWatched = document.querySelector('.watched');

  //     removeQueue.addEventListener('click', onQueueBtnClick);
  //     removeWatched.addEventListener('click', onBtnWatchedClick);
  //   }
}

// function onQueueBtnClick() {
//   if (removeQueue.classList.contains('queued')) {
//     const movies = JSON.parse(localStorage.getItem('queuedCard'));
//     renderMovieCards(movies);
//   }
// }
// function onBtnWatchedClick() {
//   const movies = JSON.parse(localStorage.getItem('watchedCard'));
//   renderMovieCards(movies);
// }
