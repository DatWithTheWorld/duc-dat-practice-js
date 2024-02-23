class MovieController {
    constructor(movieServices, movieViews){
       this.movieServices = movieServices;
       this.movieViews = movieViews;
       this.movieViews.toggleLogin();
       this.movieViews.toggleRegist();
       this.movieViews.toggleTool();
    }
}
export default MovieController;
