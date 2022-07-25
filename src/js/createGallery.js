import { gallery } from './references';
import { getGenre } from './genresOfMovies';

export function renderMovieCard(movies) {
  gallery.innerHTML = createMovieCard(movies);
}

function createMovieCard(movies) {
  return movies
<<<<<<< Updated upstream
    .map(({ poster_path, title, genre_ids, release_date, id }) => {
      const releaseDate = releaseDateChecker(release_date);
      const titleUp = title.toUpperCase();
      const poster = posterChecker(poster_path);
      const genre = getGenre(genre_ids);

      return `<li class="gallery__item" id=${id}>
=======
    .map(({ poster_path, title, genre_ids, release_date, id}) => {
      const releaseDate = release_date.slice(0, 4);
      const titleUp = title.toUpperCase();
      return `<li class="gallery__item" id=${id}>
      <a class="gallery__link" href="">
>>>>>>> Stashed changes
        <img
          class="gallery__img"
          src="${poster}"
          alt=${title}
        />
        <p class="gallery__name">${titleUp}</p>
<<<<<<< Updated upstream
        <p class="gallery__information">${genre} | ${releaseDate}</p>
=======
        <p class="gallery__information">${getGenre(
          genre_ids
        )} | ${releaseDate}</p>

      </a>
>>>>>>> Stashed changes
    </li>`;
    })
    .join('');
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
