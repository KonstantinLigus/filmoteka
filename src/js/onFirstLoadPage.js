import { paginationHome } from './references';
import { GetMovieApi } from './fetchMovies';
import { renderMovieCard } from './createGallery';
import { createNumeration } from './createNumeration';

const getMovieApi = new GetMovieApi();

window.addEventListener('DOMContentLoaded', onFirstLoadPage);

export async function onFirstLoadPage(event) {
  try {
    const response = await getMovieApi.fetchPopularMovie();
    renderMovieCard(response.results);
    paginationHome.innerHTML = createNumeration(
      response.total_pages,
      response.page
    );
  } catch (error) {
    console.log(error.message);
  }
}