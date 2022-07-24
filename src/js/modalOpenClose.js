import { GetMovieApi } from './fetchMovies';
import { createMovieCard } from './createModal';
import { trailer } from './trailer';
// import basicLightbox from basiclightbox;

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modalOpenClose: document.querySelector('.js-modalOpenClose'),
  closeBtn: document.querySelector('[data-modal-close]'),
  modalCard: document.querySelector('.movie-modal'),
  trailerBtn: document.querySelector('.modal-film__play-btn'),
};
const getMovieApi = new GetMovieApi();
let movie = null;
let watchedMovie = [];
let queuedMovie = [];

refs.modalOpenClose.addEventListener('click', onModalOpen);
refs.trailerBtn.addEventListener('click', trailer(e));

export function onModalOpen(e) {
  e.preventDefault();
  const card = e.target.parentNode;
  const id = card.getAttribute('id');

  movie = JSON.parse(localStorage.getItem('searchedMovies')).find(
    movie => movie.id === Number(id)
  );
  renderMovieCard(movie);
  const btnRefs = {
    addQueue: document.querySelector('.modal-button-queue'),
    addWatched: document.querySelector('.modal-button-watched'),
  };
  btnRefs.addQueue.addEventListener('click', onQueueBtnClick);
  btnRefs.addWatched.addEventListener('click', onBtnWatchedClick);

  refs.backdrop.classList.toggle('is-hidden');
  refs.closeBtn.addEventListener('click', onModalClose);
  refs.backdrop.addEventListener('click', onBackdropClose);
  window.addEventListener('keydown', closeOnKeydown);

  if (
    JSON.parse(localStorage.getItem('watchedCard'))?.find(
      movie => movie.id === Number(id)
    )
  ) {
    btnRefs.addWatched.textContent = 'REMOVE FROM WATCHED';
    btnRefs.addWatched.classList.add('watched');
  }
  if (
    JSON.parse(localStorage.getItem('queuedCard'))?.find(
      movie => movie.id === Number(id)
    )
  ) {
    btnRefs.addQueue.textContent = 'REMOVE FROM QUEUED';
    btnRefs.addQueue.classList.add('queued');
  }
}

function onModalClose() {
  refs.backdrop.classList.toggle('is-hidden');
  window.removeEventListener('keydown', closeOnKeydown);
  refs.modalCard.innerHTML = '';
}

function onBackdropClose(e) {
  if (e.currentTarget === e.target) {
    onModalClose();
  }
}
function closeOnKeydown(e) {
  if (e.code === 'Escape') {
    onModalClose();
  }
}

function renderMovieCard(movie) {
  refs.modalCard.innerHTML = createMovieCard(movie);
}

export function trailerRender(data) {
  // const btnModalTrailer = document.querySelector('.modal-film__play-btn');

  const instance = basicLightbox.create(
      `<div class="modal-trailer__backdrop">
          <iframe class="iframe" width="640" height="480" frameborder="0" allowfullscreen allow='autoplay'
              src="https://www.youtube.com/embed/${data.results[0].key}?autoplay=1" >
          </iframe>
      </div>`,
      {
          onShow: instance => {
              instance.element().onclick = instance.close;
              document.addEventListener('keydown', onEscClose);
          },
      },
      {
          onClose: instance => {
              document.removeEventListener('keydown', onEscClose);
              console.log(instance);
          },
      },
  );
  function onEscClose(event) {
      if (event.code === 'Escape') {
      instance.close();
      }
  }
  trailerBtn.addEventListener('click', () => {
      instance.show();
  });

function onBtnWatchedClick(e) {
  if (!e.target.classList.contains('watched')) {
    if (JSON.parse(localStorage.getItem('watchedCard'))) {
      watchedMovie = JSON.parse(localStorage.getItem('watchedCard'));
    }
    watchedMovie.push(movie);
    localStorage.setItem('watchedCard', JSON.stringify(watchedMovie));
    e.target.classList.add('watched');
    e.target.textContent = 'REMOVE FROM WATCHED';
    return;
  } else {
    /* (e.target.classList.contains('watched')) */
    watchedMovie = JSON.parse(localStorage.getItem('watchedCard'));
    const filterWatchedMovie = watchedMovie.filter(
      item => Number(item.id) !== Number(movie.id)
    );
    watchedMovie = [...filterWatchedMovie];
    localStorage.setItem('watchedCard', JSON.stringify(watchedMovie));
    e.target.classList.remove('watched');
    e.target.textContent = 'ADD TO WATCHED';
  }
}

function onQueueBtnClick(e) {
  if (!e.target.classList.contains('queued')) {
    if (JSON.parse(localStorage.getItem('queuedCard'))) {
      watchedMovie = JSON.parse(localStorage.getItem('queuedCard'));
    }
    queuedMovie.push(movie);
    localStorage.setItem('queuedCard', JSON.stringify(queuedMovie));
    e.target.classList.add('queued');
    e.target.textContent = 'REMOVE FROM QUEUED';
    return;
  } else {
    /* (e.target.classList.contains('watched')) */
    queuedMovie = JSON.parse(localStorage.getItem('queuedCard'));
    const filterQueuedMovie = queuedMovie.filter(
      item => Number(item.id) !== Number(movie.id)
    );
    queuedMovie = [...filterQueuedMovie];
    localStorage.setItem('queuedCard', JSON.stringify(queuedMovie));
    e.target.classList.remove('queued');
    e.target.textContent = 'ADD TO QUEUED';
  }
}