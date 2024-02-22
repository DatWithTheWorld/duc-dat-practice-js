class MovieController {
    constructor(movieServices, movieViews){
       this.movieServices = movieServices;
       this.movieViews = movieViews;
       this.movieViews.toggleLogin();
       this.movieViews.toggleRegist();
    }
}
export default MovieController;
