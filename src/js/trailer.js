import { trailerRender } from './modalOpenClose';

export default class FilmsApiService {
    constructor() {
        this.searchQueryFilms = '';
        this.page = 1;
        this.pages = 0;
        this.totalItems = 0;
        this.with_genres = 0;
    }

    async onfetchTrailers(id) {
        try {
        const API_KEY = 'e331122fb787497311a69180baf8c75a';
        const BASE_URL = 'https://api.themoviedb.org/3';
        const url = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
        const response = await fetch(url);
        const data = response.json();
        return data;
        } catch (error) {
        console.error('Get state error: ', error.message);
        }
    }
}

const filmTrailers = new FilmsApiService();

export async function trailer(e) {
    filmTrailers
        .onfetchTrailers(Number(e.target.dataset.id))
        .then(data => {
        trailerRender(data);
        })
        .catch(console.log);
}
