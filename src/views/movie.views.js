
import PreLogin from './pages/PreLogin';
import Trending from './pages/Trending';
import Router from '../router/Router';
import Playscr from './pages/Playscr';
import Favorite from './pages/Favorite';
import HomePage from './pages/HomePage';
class MovieView {
  constructor() {
    this.app = document.querySelector('#root');
    this.router = new Router();
    this.initRoute();
    this.main = document.createElement('div');
    this.main.classList.add('main');
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.toastList = document.createElement('ul');
    this.toastList.classList.add('notifications');
    this.main.appendChild(this.container);
    this.app.appendChild(this.toastList);
    this.app.appendChild(this.main);


    this.router.changeRoute();
  }

  initRoute() {
    this.router.addRoute('/login', PreLogin());
    this.router.addRoute('/trending', Trending());
    this.router.addRoute('/home', HomePage());
    this.router.addRoute('/favorite', Favorite());
    this.router.addRoute('/playscr', Playscr());
  }

  toggleLogin() {
    const logginbtn = document.querySelector('.btn-log');
    const loginform = document.querySelector('.con-form-login');
    logginbtn.addEventListener('click', function () {
      loginform.classList.toggle('hidden');
    });
    document.addEventListener('click', function (e) {
      const targetE = e.target;
      if (!loginform.contains(targetE) && !logginbtn.contains(targetE)) {
        loginform.classList.add('hidden');
      }
    });
  }

  toggleRegist() {
    const signupbtn = document.querySelector('.btn-signup');
    const registform = document.querySelector('.con-form-regist');
    signupbtn.addEventListener('click', function () {
      registform.classList.toggle('hidden');
    });
    document.addEventListener('click', function (e) {
      const targetE = e.target;
      if (!registform.contains(targetE) && !signupbtn.contains(targetE)) {
        registform.classList.add('hidden');
      }
    });
  }

  toggleTool() {
    const playscr = document.querySelector('.playscr');
    document.addEventListener('click', function (e) {
      // Logic for toggleTool
    });
  }
}



export default MovieView;
