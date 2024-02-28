
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
  appearToolbar() {
    const returnbtn = document.querySelector('.returnbtn');
    const playscr = document.querySelector('.playscr');
    const playcircle = document.querySelector('.playcircle');
    const playbarcon = document.querySelector('.playscr-bar-con');
    const figureE = playscr.querySelector('.figuresc');
    playscr.addEventListener('click', function (event) {
      const videos = document.getElementById('playsrcvd');
    const target = event.target;
      if( target !== playbarcon && !Array.from(figureE).includes(target)){
        if(videos.paused){
          videos.play();
          playcircle.classList.toggle('hidden');
          setTimeout(() => {
            playbarcon.classList.toggle('hidden')
            returnbtn.classList.toggle('hidden')
          },10000);
        }else{
          videos.pause();
          
          playcircle.classList.toggle('hidden');
          playbarcon.classList.toggle('hidden')
          returnbtn.classList.toggle('hidden');
        }
      }
    });
    videos.addEventListener('ended', () =>{
      playcircle.classList.toggle('hidden');
      playbarcon.classList.toggle('hidden')
      returnbtn.classList.toggle('hidden');
    })
  }
  toggleBar(){
    const playscrbarcon = document.querySelector('.playscr-bar-con')
    const returnbtn = document.querySelector('.returnbtn');
    const videos = document.getElementById('playsrcvd');
      setTimeout(() => {
        playscrbarcon.classList.toggle('hidden')
        returnbtn.classList.toggle('hidden')
      },10000);
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

  
}

export default MovieView;
