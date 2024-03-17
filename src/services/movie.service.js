import Movie from '../model/movie.model';
import api from '../api/movies';
import { createToast } from '../views/components/handleToast';

class MovieService {
  constructor() {
    this.movies = [];
  }

  async getAllMovies() {
    try {
      let {data} = await api.get('/movies');
      if (data) {
         data = await data.map((movie) => new Movie(movie));
        this.movies = data;
        console.log(this.movies)
        return this.movies;
      }
    } catch (error) {
      createToast('error', error);
    }
  }
  
}

export default MovieService;