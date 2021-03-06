import { getGenre } from './genresOfMovies';
const modalCard = document.querySelector('.movie-modal');

export function renderMovieCard(movie) {
  modalCard.innerHTML = createMovieCard(movie);
}

function createMovieCard(movie) {
  const {
    poster_path,
    title,
    genres,
    popularity,
    vote_average,
    vote_count,
    overview,
    id,
  } = movie;
  const titleUp = title.toUpperCase();
  const genre = genreByName(genres);
  const poster = posterChecker(poster_path);
  return ` <div class="movie-card__item">
      <img src=${poster} class="movie-card__poster" />
    </div>
    <div class="movie-card__item">
      <h1 class="movie-card__title"> ${titleUp} </h1>
      <ul class="movie-card__info">
        <li class="movie-card__info--item">
          <h2 class="movie-card__info--title"> Vote / Votes </h2>
          <p class="movie-card__content--item"><span class="movie-card__vote"> ${vote_average} </span> / ${vote_count} </p>
        </li>
        <li class="movie-card__info--item">
          <h2 class="movie-card__info--title"> Popularity </h2>
          <p class="movie-card__content--item"> ${popularity} </p>
        </li>
        <li class="movie-card__info--item">
          <h2 class="movie-card__info--title"> Movie Title </h2>
          <p class="movie-card__content--item"> ${titleUp} </p>
        </li>
        <li class="movie-card__info--item">
          <h2 class="movie-card__info--title"> Genre </h2>
          <p class="movie-card__content--item"> ${genre} </p>
      </ul>
      <h2 class="movie-card__about">About</h2>
      <p class="movie-card__about--content"> ${overviewChecker(overview)} </p>
      <div class="button-wrapper">
      <button type="button" class="modal-button modal-button-watched">Add to watched</button>
      <button type="button" class="modal-button modal-button-queue">Add to queue</button>
      </div>
    </div>`;
}

function genreByName(genres) {
  if (genres.length === 0) {
    return 'no info';
  }
  return genres
    .map(({ name }) => {
      return name;
    })
    .join(', ');
}

function posterChecker(poster_path) {
  if (poster_path === null) {
    return 'https://via.placeholder.com/440x660.jpg?text=Image+Not+Found';
  }
  return `https://image.tmdb.org/t/p/w500${poster_path}`;
}

function overviewChecker(overview) {
  if (overview === '') {
    return 'no info';
  }
  return overview;
}
