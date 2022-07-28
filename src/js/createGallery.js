import { gallery } from './references';
import { getGenre } from './genresOfMovies';

export function renderMovieCard(movies) {
  if (movies.length === 0) {
    gallery.innerHTML =
      '<img src=https://cdn.dribbble.com/users/6487750/screenshots/16827244/media/f79f5e40dd7189d69388ec0b069e4b73.png />';
    return;
  }
  gallery.innerHTML = createMovieCard(movies);
}

function createMovieCard(movies) {
  return movies
    .map(({ poster_path, title, genre_ids, release_date, id }) => {
      const releaseDate = releaseDateChecker(release_date);
      const titleUp = title.toUpperCase();
      const poster = posterChecker(poster_path);
      const genre = getGenre(genre_ids);

      return `<li class="gallery__item" id=${id}>
        <img
          class="gallery__img"
          src="${poster}"
          alt=${title}
        />
        <p class="gallery__name">${titleUp}</p>
        <p class="gallery__information">${genre} | ${releaseDate}</p>
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
    return 'https://via.placeholder.com/440x660.jpg?text=Image+Not+Found';
  }
  return `https://image.tmdb.org/t/p/w500${poster_path}`;
}
