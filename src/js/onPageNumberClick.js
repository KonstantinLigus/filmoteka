import { paginationHome } from './references';
import {
  isFetchPopularMovie,
  isFetchSearchedMovie,
  GetMovieApi,
} from './fetchMovies';
import { inputValue } from './onSubmitClick';
import { renderMovieCard } from './createGallery';
import { renderNumerationOfHome } from './createNumeration';

const getMovieApi = new GetMovieApi();
let pageCurrent = null;
paginationHome.addEventListener('click', onPageNumberClick);

export function onPageNumberClick(event) {
  pageCurrent = event.target.dataset.page;
  checkFetchPopularMovie();
  checkFetchSearchedMovie();
}

function checkFetchPopularMovie() {
  if (isFetchPopularMovie) {
    // if (event.target.classList.contains('numb')) {
    renderPopularMoviesAndNumeration();
    // }
  }
}

function checkFetchSearchedMovie(event) {
  if (isFetchSearchedMovie) {
    // if (event.target.classList.contains('numb')) {
    renderSearchedMoviesAndNumeration();
    // }
  }
}

async function renderSearchedMoviesAndNumeration() {
  try {
    getMovieApi.setPage(pageCurrent);
    const data = await getMovieApi.fetchSearchedMovie(inputValue);
    renderMovieCard(data.results);
    renderNumerationOfHome(data.total_pages, data.page);
  } catch (error) {
    console.error(error);
  }
}
async function renderPopularMoviesAndNumeration() {
  try {
    getMovieApi.setPage(pageCurrent);
    const data = await getMovieApi.fetchPopularMovie();
    renderMovieCard(data.results);
    renderNumerationOfHome(data.total_pages, data.page);
  } catch (error) {
    console.error(error);
  }
}
