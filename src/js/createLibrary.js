import { gallery } from './references';
import { getGenre } from './genresOfMovies';

export function renderMovieCards(movies) {
  if (movies === null || movies.length === 0) {
    gallery.innerHTML =
      '<img src=https://cdn.dribbble.com/users/888330/screenshots/2653750/media/b7459526aeb0786638a2cf16951955b1.png />';
    return;
  }
  gallery.innerHTML = createMovieCard(movies);
}

function createMovieCard(movies) {
  return movies
    .map(({ poster_path, title, genres, release_date, id }) => {
      const releaseDate = releaseDateChecker(release_date);
      const titleUp = title.toUpperCase();
      const poster = posterChecker(poster_path);
      const genre = genreById(genres);
      return `<li class="gallery__item" id=${id}>
        <img
          class="gallery__img"
          src="${poster}"
          alt=${title}
        />
        <p class="gallery__name">${titleUp}</p>
        <p class="gallery__information">${getGenre(genre)} | ${releaseDate}</p>
    </li>`;
    })
    .join('');
}

function genreById(genres) {
  return genres.map(({ id }) => {
    return id;
  });
}
function releaseDateChecker(release_date) {
  if (release_date === '') {
    return 'no info';
  }
  return release_date?.slice(0, 4);
}

function posterChecker(poster_path) {
  if (poster_path === null) {
    return (poster =
      'https://via.placeholder.com/440x660.jpg?text=Image+Not+Found');
  }
  return `https://image.tmdb.org/t/p/w500${poster_path}`;
}
