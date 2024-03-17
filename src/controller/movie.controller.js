
import MovieView from '../views/movie.views';

class MovieController {
  constructor(movieServices, movieViews) {
    this.movieServices = movieServices;
    this.movieViews = movieViews;
    const currentPath = window.location.pathname;
    if(currentPath === "/login"){
      this.movieViews.toggleLogin();
      this.movieViews.toggleRegist();
      this.handleLogin();
      this.handleDisplayDataUser();
    }else if(currentPath === "/playscr"){
    this.movieViews.appearToolbar();
    this.movieViews.toggleBar();
    this.movieViews.videoDuration();
    this.movieViews.return();
  }else if(currentPath === "/home" || currentPath === "/favorite"|| currentPath === "/trending"){
    if(currentPath === "/home"){
      this.handleDisplayData();
      this.movieViews.toggleAddForm();
    }
    if(currentPath === "/trending"){
      this.handleDisplayDataTDP();
    }
     this.movieServices.bindDataChanged(this.onDataChanged);
     this.movieViews.homepageoption();
     this.movieViews.showSite();
  }
}
 onDataChanged = (movies) => {
  this.movieViews.displayData(movies);
 }
 async handleDisplayData(){
  const movies = await this.movieServices.getAllMovies();
  this.movieViews.displayData(movies);
 }
 async handleLogin(){
  const users = await this.movieServices.getAllUsers();
  this.movieViews.loginss(users);

 }
 async handleDisplayDataUser(){
  const users = await this.movieServices.getAllUsers();
 }
 async handleDisplayDataTDP(){
  const movies = await this.movieServices.getAllMovies();
  this.movieViews.displayDataTDP(movies);
 }

}
export default MovieController;
