import { renderMovieCards } from './createLibrary';

const libBtnWatch = document.querySelector('[data-action="watched"]');
const libBtnQueue = document.querySelector('[data-action="queue"]');
export let isWatchedOpen = true;
export let isQueueOpen = false;

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
  openWatched();
  onLibraryLoad();
}

export function onClickLibBtnQueue(event) {
  libBtnQueue.classList.add('disabled');
  libBtnWatch.classList.remove('disabled');
  libBtnQueue.disabled = event.target;
  libBtnWatch.disabled = !event.target;
  openQueue();
  const movies = JSON.parse(localStorage.getItem('queuedCard'));
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