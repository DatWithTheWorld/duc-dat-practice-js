import MovieController from './controller/movie.controller';
import MovieService from './services/movie.service';
import MovieView from './views/movie.views';

<<<<<<< Updated upstream
// new MovieController(new MovieService(), new MovieView());
new MovieView();
=======
new MovieController(new MovieService(), new MovieView());
// new MovieView();
>>>>>>> Stashed changes
