import { createToast, removeToast } from "./components/handleToast";
import debounce from '../helper/debounce';
import PreLogin from './pages/PreLogin';
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

        this.container.innerHTML += PreLogin();

    }
}
export default MovieView;