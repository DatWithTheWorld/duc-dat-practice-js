import { createToast, removeToast } from "./components/handleToast";
import debounce from '../helper/debounce';
import PreLogin from './pages/PreLogin';
import { clearForm, collectData } from "../helper/formUtils";
import HomePage from "./pages/HomePage";
import Favorite from "./pages/Favorite";
class MovieView {
    constructor(){
        this.app = document.querySelector('#root');
        this.main = document.createElement('div');
        this.main.classList.add('main');
        this.container = document.createElement('div');
        this.container.classList.add('container');
        this.toastList = document.createElement('ul');
        this.toastList.classList.add('notifications');
        this.main.appendChild(this.container);
        this.app.appendChild(this.toastList);
        this.app.appendChild(this.main);
        // this.container.innerHTML += PreLogin();
        this.container.innerHTML += Favorite();
        }   
}

export default MovieView;