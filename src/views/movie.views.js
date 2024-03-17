import PreLogin from './pages/PreLogin';
import Trending from './pages/Trending';
import Router from '../router/Router';
import Playscr from './pages/Playscr';
import Favorite from './pages/Favorite';
import HomePage from './pages/HomePage';
import cardTrending from './components/cardTrending';
import CardDetail from './components/cardDetail';
import { createToast } from './components/handleToast';
import generateID from '../helper/uid'
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
    const playbar = document.querySelector('.playscr-bar');
    const figureE = Array.from(playscr.querySelectorAll('.figuresc'));
    const videos = document.getElementById('playsrcvd');
    const opa = document.querySelector('.opa');
    
    playscr.addEventListener('click', function (event) {
      const target = event.target;
      if (target !== playbar && !figureE.includes(target)) {
        if (videos.paused) {
          videos.play();
          playcircle.classList.toggle('hidden');
          returnbtn.classList.toggle('hidden');
          setTimeout(() => {
            playbarcon.classList.toggle('hidden');
          }, 2000);
          setTimeout(() => {
            opa.classList.toggle('hidden');
          }, 0);
        } else {
          videos.pause();
          opa.classList.toggle('hidden');
          playcircle.classList.toggle('hidden');
          playbarcon.classList.toggle('hidden');
          returnbtn.classList.toggle('hidden');
        }
      }
    });
    
    videos.addEventListener('ended', () => {
      playcircle.classList.toggle('hidden');
      playbarcon.classList.toggle('hidden');
      returnbtn.classList.toggle('hidden');
    });
  }
  toggleBar(){
    const playscrbarcon = document.querySelector('.playscr-bar-con')
    const returnbtn = document.querySelector('.returnbtn');
    const videos = document.getElementById('playsrcvd');
      setTimeout(() => {
        playscrbarcon.classList.toggle('hidden')
        returnbtn.classList.toggle('hidden')
      },2000);
  }

  initRoute() {
    this.router.addRoute('/', PreLogin());
    this.router.addRoute('/trending', Trending());
    this.router.addRoute('/home', HomePage());
    this.router.addRoute('/favorite', Favorite());
    this.router.addRoute('/playscr', Playscr(sessionStorage.getItem("link")));
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
   toggleAddForm(){
    const btnadd = document.querySelector('.btn-add');
    const addForm = document.querySelector('.addMovieForm');
    btnadd.addEventListener('click', function (e) {
      addForm.classList.toggle('hidden');     
    });
    document.addEventListener('click', function(event) {
      const targetElement = event.target; 
      if(!addForm.classList.contains('hidden')){
        if (!addForm.contains(targetElement) && !btnadd.contains(targetElement)) {
          addForm.classList.toggle('hidden');
        }
      }
    });
   }
   videoDuration(dura){
    const videos = document.getElementById('playsrcvd');
  let maxDuration = 0;
  const progressBar = document.querySelector('.progress-bar');
  const timingElement = document.querySelector('.timing');
  const maxtimeE = document.querySelector('.maxtime');

  videos.addEventListener('loadedmetadata', function(e) {
    maxDuration = videos.duration;
    if (dura) {
      videos.currentTime = dura; // Thiết lập thời gian bắt đầu của video
    }
  });

  videos.addEventListener('timeupdate', function() {
    const currentTime = videos.currentTime;
    const progressPercentage = (currentTime / maxDuration) * 100;
    const progressWidth = (progressPercentage / 100) * 100;
    progressBar.style.width = progressWidth + '%';

    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timingElement.textContent = formattedTime;

    const minutesm = Math.floor(maxDuration / 60);
    const secondsm = Math.floor(maxDuration % 60);
    const formattedTimem = `${String(minutesm).padStart(2, '0')}:${String(secondsm).padStart(2, '0')}`;
    maxtimeE.textContent = formattedTimem;
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
  loginss(users){
    this.users = users;
    console.log(users)
    const form = document.querySelector(".form-log");
const button = document.querySelector(".btn-submit-login");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector(".username-input").value;
  const password = document.querySelector(".userpassword-input").value;

  if (name === "") {
    createToast("error", "Please enter your username");
  }  if (password === "") {
    createToast("error", "Please enter your password");
  }
   if (name === "" || password === "") {
    createToast("error", "Please enter your username and password");
  } else {
    let isLoggedIn = false;
    this.users.forEach((user) => {
      if (user.name === name && user.password === password) {
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("id", user.id);
        isLoggedIn = true;
      }
    });

    if (isLoggedIn) {
      window.location.href = "/home";
    } else {
      createToast("error", "Invalid username or password");
    }
  }
});
  }
  return(handle){
    const returnbtn = document.querySelector('.returnbtn');
    const video = document.querySelector('#playsrcvd');

    returnbtn.addEventListener('click',(e)=>{
      e.preventDefault();
      handle(sessionStorage.getItem("mvid"),""+video.currentTime)
      window.location.href = "/trending";
    })
  }
  homepageoption(){
    const navleft = document.querySelector(".nav-left-container")
    const ulsecond = navleft.getElementsByTagName('ul')[1];
    const firstli = ulsecond.getElementsByTagName('li')[0];
    const secondli = ulsecond.getElementsByTagName('li')[1];
    const thirdli = ulsecond.getElementsByTagName('li')[2];
    const ulfourth = navleft.getElementsByTagName('ul')[3];
    const logout = ulfourth.getElementsByTagName('li')[1];
    logout.addEventListener('click',(e)=>{
      e.preventDefault();
      sessionStorage.removeItem("name");
      sessionStorage.removeItem("id");
      window.location.href = "/";
    })
    firstli.addEventListener("click",(e)=>{
      e.preventDefault();
      window.location.href = "/home";
    })
    secondli.addEventListener("click",(e)=>{
      e.preventDefault();
      window.location.href = "/favorite";

    })  
    thirdli.addEventListener("click",(e)=>{
      e.preventDefault();
      window.location.href = "/trending";
    })
  }
  showSite(){
    const navleft = document.querySelector(".nav-left-container")
    const ulsecond = navleft.getElementsByTagName('ul')[1];
    const firstli = ulsecond.getElementsByTagName('li')[0];
    const secondli = ulsecond.getElementsByTagName('li')[1];
    const thirdli = ulsecond.getElementsByTagName('li')[2];
    const currentPath = window.location.pathname;
    if(currentPath === "/home"){
         firstli.style.fontWeight = "900";
         firstli.style.fontSize = "18px";
         firstli.style.opacity = "1"
    }else if(currentPath === "/favorite"){
      secondli.style.fontWeight = "900";
      secondli.style.fontSize = "18px";
      secondli.style.opacity = "1"
    }else if(currentPath === "/trending"){
      thirdli.style.fontWeight = "900";
      thirdli.style.fontSize = "18px";
      thirdli.style.opacity = "1"
    }
  }
  displayData(movies){
    this.movies = movies;
  const hometrendingct = document.querySelector(".movie-center-trending-card");
  let html = "";
  this.movies.forEach(movie => {
    html += cardTrending(movie);
  });
  hometrendingct.innerHTML = html;
  }

  displayDataTDP(movies){
    this.movies = movies;
    const movieTrending = document.querySelector(".movie-trending");
    let html = "";
    this.movies.forEach(movie => {
      html += cardTrending(movie);
      console.log(cardTrending(movie))
    });
    movieTrending.innerHTML = html;
  }
  
  showCardTrending(movies,idmv){
    this.idmv = idmv;
    this.movies = movies;
    const movieTrending = document.querySelector(".movie-trending");
    const cardContainer = document.querySelector(".card-container");
    const cardTrending = movieTrending.querySelectorAll(".card-trending");
   cardTrending.forEach((card)=>{
    card.addEventListener("click",(e)=>{
      e.preventDefault();
      card.style.opacity = "1";
      cardTrending.forEach((othercard)=>{
        if(othercard !== card) {
           othercard.style.opacity = "0.3";
        }
      });
      const id = card.getAttribute("data-id");
      const btnfvr = card.querySelector('.card-trending-status');
      const imga = btnfvr.querySelector("img");
      const imgasrc = imga.src;
      this.movies.forEach((movie)=>{
        if(movie.id === id){
          cardContainer.innerHTML = CardDetail(movie);
          
        }
      });
      const cardDetail = document.querySelector(".card-detail-stt");
      cardDetail.src = imgasrc;
      const carddt = document.querySelector(".card-details");
      const btnwatch = document.querySelector(".btn-watch");
      btnwatch.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log(btnwatch)
        const id = carddt.getAttribute("data-id");
        this.movies.forEach((movie)=>{
          if(movie.id === id){
           this.idmv.forEach((idm)=>{
            if(idm.id === id){
              console.log(movie.link)
              sessionStorage.setItem("link", movie.link)
              sessionStorage.setItem("mvid", movie.id)
              sessionStorage.setItem("duration", idm.timewatched)
              window.location.href = "/playscr";
            }
           })
          }
        })
      })
   })
  
  })
}
bindAddUser(handle){
  const addButton = document.querySelector(".btn-submit-regist");
  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const formRes = document.querySelector(".form-res");
    const name = formRes.querySelector(".username-input").value;
    const password = formRes.querySelector(".userpassword-input").value;
    const email = formRes.querySelector(".useremail-input").value;
    const regname =/^[a-z]+$/;
    const regemail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(name.match(regname) && email.match(regemail)) {
      const user = {
        id: generateID(),
        name,
        password,
        avatar: "",
        email,
        favorites: [],
        watched:[]
      };
      handle(user);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
    if(name === "" || password === "" || email === "") {
      createToast("error", "Please enter your username, password and email");
    }
    if(!name.match(regname)){
      createToast("error", "Please enter a valid username");
    }
    if(!email.match(regemail)){
      createToast("error", "Please enter a valid email");
    } 
  })
}
getVideoDuration(file){
  return new Promise((resolve)=>{
    const fileUrl = URL.createObjectURL(file);
    const video = document.createElement("video");
    video.src = fileUrl;
    video.addEventListener("loadedmetadata",()=>{
      const duration = video.duration;
      resolve(duration);
    })
  })
}
 bindAddMovie(handle){
  const addButton = document.querySelector(".addmoviebtn");
  const aposter = document.querySelector(".inputAddField-Poster");
  let poster = "";
  aposter.addEventListener("change",(ev)=>{
    const file = ev.target.files[0];
    poster = file.name;
    console.log(poster);
  })
  let link = "";
  let duration = "";
  const avideo = document.querySelector(".inputAddField-Video");
   avideo.addEventListener("change", async (ev)=>{
    const file = ev.target.files[0];
    link = file.name;
    const fileUrl = URL.createObjectURL(file);
    const video = document.createElement("video");
    video.src = fileUrl;
    duration = await this.getVideoDuration(file)
    console.log(duration);
    console.log(link);
  })
  addButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const name = document.querySelector(".inputAddField-Name").value;
    const ayear = document.querySelector(".inputAddField-Date").value;
    const year = ayear.substring(0,4);
    const type = document.querySelector(".inputAddField-Type").value;
    const evaluate = document.querySelector(".inputAddField-Evaluate").value;
    const description = document.querySelector(".inputAddField-Description").value;
   if(name === "" || poster === "" || link === ""){
      createToast("error", "Please fill all the fields");
    } else{
      const movie = {
        id: generateID(),
        name,
        year,
        type,
        poster,
        link,
        duration,
        description,
        evaluate,
        favorites:"ic-heart-3d"
      };
      console.log(movie);
      handle(movie);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  })
}
showFavoriteItem(ids) {
  this.ids = Array.isArray(ids) ? ids : [ids]; 
  const cardTrending = document.querySelectorAll(".card-trending");
  let html = "";
  cardTrending.forEach((card) => {
    const value = card.getAttribute("data-id");
    this.ids.forEach((id) => {
      if (id == value) {
        const btnfvr = card.querySelector('.card-trending-status');
        const imga = btnfvr.querySelector("img");
        imga.src = "http://localhost:3000/ic-heart-3d-hv.svg";
      }
    });
  });
}
displayDataFavorites(movies,ids){
  this.movies = movies;
  this.ids = Array.isArray(ids) ? ids : [ids]; 
  const favorite = document.querySelector(".favorite");
  let html = "";
  this.movies.forEach(movie => {
    this.ids.forEach((id)=>{
      if(movie.id === id){
        console.log(movie.favorites)
        movie.favorites = "ic-heart-3d-hv";
        html += cardTrending(movie);
      }
    })
  });
  favorite.innerHTML = html;
  console.log(html);

}
displayDataContinue(movies,ids, idmv){
  this.movies = movies;
  this.ids = ids;
  this.idmv = Array.isArray(idmv) ? idmv : [idmv];
  console.log(this.movies)
  console.log(this.ids)
  console.log(this.idmv)
  const continues = document.querySelector(".movie-center-continue-card");
  let html = "";
  this.movies.forEach((movie) =>{
    this.ids.forEach((id)=>{
      if(movie.id === id.id){
        console.log(id.id)
            html += cardTrending(movie);
      }
    })
  })
   continues.innerHTML = html;
   console.log(html);
   const cardtr = continues.querySelectorAll(".card-trending");
   cardtr.forEach((card) => {
    this.idmv.forEach((id) => {
      if(id === card.getAttribute("data-id")){
        const btnfvr = card.querySelector('.card-trending-status');
        const imga = btnfvr.querySelector("img");
        imga.src = "http://localhost:3000/ic-heart-3d-hv.svg";
      }
    })
   })
}
bindAddToFavorite(handle){
 const button = document.querySelectorAll(".btn-addFavorite");
 button.forEach((btn) => {
  btn.addEventListener("click", () =>{
    console.log(btn);
    const parentDiv = btn.closest(".card-trending")
    console.log(parentDiv);
    if (parentDiv){
      console.log(parentDiv.getAttribute("data-id"));
      const imga = parentDiv.querySelector(".image-status")
      if(imga.src === "http://localhost:3000/ic-heart-3d.svg"){
        imga.src = "http://localhost:3000/ic-heart-3d-hv.svg";
      }else if (imga.src === "http://localhost:3000/ic-heart-3d-hv.svg"){
        imga.src = "http://localhost:3000/ic-heart-3d.svg";
  
    }
    const id = parentDiv.getAttribute("data-id");
     handle(id); 
       setTimeout(() => {
         window.location.reload();
     
       }, 1000);
    }
  })
 })
}


}

export default MovieView;
