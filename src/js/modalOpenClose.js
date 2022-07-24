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

refs.modalOpenClose.addEventListener('click', onModalOpen);
refs.trailerBtn.addEventListener('click', trailer(e));

export async function onModalOpen(e) {
  e.preventDefault();
  // if (e.target.parentNode.classList.contains('.gallery__item')) { return; }
  const card = e.target.parentNode;
  const id = card.getAttribute('id');
  try {
    const response = await getMovieApi.fetchPopularMovie();
    let movie = response.results.find(movie => movie.id === Number(id));
    renderMovieCard(movie);
  } catch (error) {
    console.log(error.message);
  }
  refs.backdrop.classList.toggle('is-hidden');
  refs.closeBtn.addEventListener('click', onModalClose);
  refs.backdrop.addEventListener('click', onBackdropClose);
  window.addEventListener('keydown', closeOnKeydown);
}

function onModalClose() {
  refs.backdrop.classList.toggle('is-hidden');
  window.removeEventListener('keydown', closeOnKeydown);
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
}
