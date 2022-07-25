import { createMovieCard } from './createLibrary';
import { gallery } from './references';

const libBtnWatch = document.querySelector('[data-action="watched"]');
const libBtnQueue = document.querySelector('[data-action="queue"]');
let movie = [];

window.addEventListener('DOMContentLoaded', onLibraryLoad);
libBtnWatch.addEventListener('click', onClickLibBtnWatch);
libBtnQueue.addEventListener('click', onClickLibBtnQueue);

export function onLibraryLoad(event) {
    movie = JSON.parse(localStorage.getItem('watchedCard'));
    gallery.innerHTML = createMovieCard(movie);

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

movie = JSON.parse(localStorage.getItem('queuedCard'));
gallery.innerHTML = createMovieCard(movie);

}



