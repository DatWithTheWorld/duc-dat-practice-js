import MovieController from './controller/movie.controller';
import MovieService from './services/movie.service';
import MovieView from './views/movie.views';
import UserService from './services/user.service';
import UserController from './controller/user.controller';

new MovieController(new MovieService(), new MovieView(), new UserController(new UserService()));
// new MovieView();
