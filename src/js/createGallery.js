import { gallery } from './references.js';


export function createMovieGallery(params) {
    return params.map(({
        poster_path,
        title,
        genre_ids = [],
        release_date,
        vote_average,
    })=>`<li class="gallery__item">
            <a class="gallery__link" href="https://image.tmdb.org/t/p/w500${poster_path}">
                <img
                    class="gallery__img"
                    src="https://image.tmdb.org/t/p/w500${poster_path}"
                    alt="Film${title} poster"
                    loading="lazy"
                />
                <p class="gallery__name">${title}</p>
                <p class="gallery__information">${genre_ids} | ${release_date}</p>
                <span class="gallery__rating"> <p> ${vote_average}</p></span>
            </a>
        </li>`).join('');
}

function getGenreNameById(genreIds) {
    let newArray = [];
    genreIds.forEach(genreId => {
        getGenresFromLocalStorage().map(genre => {
            if (genre.id === genreId) {
            newArray.push(genre.name);
        }
        });
    });
    return newArray;
}

function renderGallery(params) {
    gallery.insertAdjacentHTML('beforeend', createMovieGallery(params));
}

function exchangeObjectData(result) {
    result.results.forEach(obj => {
        if (obj.genre_ids) {
        obj.genre_ids = getGenreNameById(obj.genre_ids);
        }
        if (obj.release_date) {
        obj.release_date = obj.release_date.slice(0, 4);
        }
    });
}

// function setGenresToLocalStorage() {
//     let query = `genre/movie/list?`;
//     getApiData(query)
//         .then(result => {
//         setToLocalStorage('genres', result)
//         });
// }

// function getGenresFromLocalStorage() {
// return getFromLocalStorage('genres').genres
// }

// function setToLocalStorage(key, data) {
//     localStorage.setItem(key, JSON.stringify(data));
// }

// function getFromLocalStorage(key) {
//     const savedData = localStorage.getItem(key);
//     const parsedData = JSON.parse(savedData);
//     return parsedData;
// }