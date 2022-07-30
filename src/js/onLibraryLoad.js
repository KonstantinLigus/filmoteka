import { renderMovieCards } from './createLibrary';
import { loaderShow, hideLoader } from './loader';

const libBtnWatch = document.querySelector('[data-action="watched"]');
const libBtnQueue = document.querySelector('[data-action="queue"]');
export let isWatchedOpen = true;
export let isQueueOpen = false;

window.addEventListener('DOMContentLoaded', onLibraryLoad);
libBtnWatch.addEventListener('click', onClickLibBtnWatch);
libBtnQueue.addEventListener('click', onClickLibBtnQueue);

export function onLibraryLoad(event) {
  loaderShow();
  const movies = JSON.parse(localStorage.getItem('watchedCard'));
  hideLoader();
  renderMovieCards(movies);
}

export function onClickLibBtnWatch(event) {
  libBtnWatch.classList.add('disabled');
  libBtnQueue.classList.remove('disabled');
  libBtnWatch.disabled = event.target;
  libBtnQueue.disabled = !event.target;
  openWatched();
  onLibraryLoad();
}

export function onClickLibBtnQueue(event) {
  loaderShow();
  libBtnQueue.classList.add('disabled');
  libBtnWatch.classList.remove('disabled');
  libBtnQueue.disabled = event.target;
  libBtnWatch.disabled = !event.target;
  openQueue();
  const movies = JSON.parse(localStorage.getItem('queuedCard'));
  hideLoader();
  renderMovieCards(movies);
}

function openWatched() {
  isWatchedOpen = true;
  isQueueOpen = false;
}
function openQueue() {
  isWatchedOpen = false;
  isQueueOpen = true;
}
