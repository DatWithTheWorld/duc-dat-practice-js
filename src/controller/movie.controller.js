
import MovieView from '../views/movie.views';

class MovieController {
  constructor(movieServices, movieViews) {
    this.movieServices = movieServices;
    this.movieViews = movieViews;
    const currentPath = window.location.pathname;
    if(currentPath === "/login"){
      this.movieViews.toggleLogin();
      this.movieViews.toggleRegist();
    }else if(currentPath === "/playscr"){
    this.movieViews.appearToolbar();
    this.movieViews.toggleBar();
  }
}
}

export default MovieController;
