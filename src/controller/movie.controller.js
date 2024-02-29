import MovieView from '../views/movie.views';

class MovieController {
  constructor(movieServices, movieViews) {
    this.movieServices = movieServices;
    this.movieViews = movieViews;
    const currentPath = window.location.pathname;
    if(currentPath === "/login"){
      this.movieViews.toggleLogin();
      this.movieViews.toggleRegist();
      this.movieViews.loginss();
    }else if(currentPath === "/playscr"){
    this.movieViews.appearToolbar();
    this.movieViews.toggleBar();
  }else if(currentPath === "/home" || currentPath === "/favorite"|| currentPath === "/trending"){
     this.movieViews.homepageoption();
     this.movieViews.showSite();
  }
}
}

export default MovieController;
