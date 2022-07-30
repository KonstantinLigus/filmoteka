import { GetMovieApi } from './fetchMovies';
import { renderMovieCard } from './createGallery';
import { renderNumerationOfHome } from './createNumeration';
import { loaderShow, hideLoader } from './loader';

const getMovieApi = new GetMovieApi();

window.addEventListener('DOMContentLoaded', onFirstLoadPage);

export async function onFirstLoadPage(event) {
  loaderShow();
  try {
    const data = await getMovieApi.fetchPopularMovie();
    hideLoader();
    renderMovieCard(data.results);
    renderNumerationOfHome(data.total_pages, data.page);
  } catch (error) {
    console.error(error.message);
  }
}
