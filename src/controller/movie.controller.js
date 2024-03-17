
import MovieView from '../views/movie.views';

class MovieController {
  constructor(movieServices, movieViews, userController) {
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
    this.movieViews.videoDuration();
    this.movieViews.return();
  }else if(currentPath === "/home" || currentPath === "/favorite"|| currentPath === "/trending"){
    if(currentPath === "/home"){
       this.movieServices.getAllMovies().then((movies)=>{
        this.movieViews.displayData(movies)
        this.movieViews.toggleAddForm();
   });
    }
     if(currentPath === "/trending"){
    this.movieServices.getAllMovies().then((movies)=>{
       this.movieViews.displayDataTDP(movies)
       this.movieViews.showCardTrending(movies);
      });
    }

     this.movieViews.homepageoption();
     this.movieViews.showSite();
  }
}

}

export default MovieController;
