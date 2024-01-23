class MovieController {
    constructor(movieServices, movieViews){
       this.movieServices = movieServices;
       this.movieViews = movieViews;

       movieViews.handleToggleLoginMovie();
       movieViews.handleLogin();
    }
}
export default MovieController;