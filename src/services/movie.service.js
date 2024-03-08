import Movie from '../model/movie.model';
import api from '../api/movies';
import User from '../model/user.model';
import { createToast } from '../views/components/handleToast';

class MovieService {
  constructor() {
    this.movies = [];
    this.users = [];
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
  async getAllUsers(){
    try{
      let {data} = await api.get('/users');
      if(data){
      data = await data.map((user) => new User(user));
      this.users = data;
      console.log(this.users);
      return this.users;
      }
    }catch (error) {
      createToast('error', error);
    }
  }
  bindDataChanged(callback){
    this.onDataChanged = callback;
  }
  commitMovies = (movies) => {
    this.onDataChanged(movies);
  }
  
}

export default MovieService;