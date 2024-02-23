import { createToast, removeToast } from "./components/handleToast";
import debounce from '../helper/debounce';
import PreLogin from './pages/PreLogin';
import { clearForm, collectData } from "../helper/formUtils";
import HomePage from "./pages/HomePage";
import Favorite from "./pages/Favorite";
import Trending from "./pages/Trending";
import Playscr from "./pages/Playscr";
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

        //  this.container.innerHTML += HomePage();
        this.container.innerHTML += Playscr();
        // this.container.innerHTML += HomePage();
        // this.container.innerHTML += Favorite();
        }  
        toggleLogin(){
          const logginbtn = document.querySelector(".btn-log");
          const loginform = document.querySelector(".con-form-login");
          logginbtn.addEventListener("click", function(){
             loginform.classList.toggle('hidden');
          })
          document.addEventListener("click", function(e){
            const targetE = e.target;
            if(!loginform.contains(targetE)&& !logginbtn.contains(targetE)){
               loginform.classList.add('hidden');
            }
          })
        } 
        toggleRegist(){
            const signupbtn = document.querySelector(".btn-signup");
            const registform = document.querySelector(".con-form-regist");
            signupbtn.addEventListener("click", function(){
               registform.classList.toggle('hidden');
            })
            document.addEventListener("click", function(e){
              const targetE = e.target;
              if(!registform.contains(targetE)&& !signupbtn.contains(targetE)){
                    registform.classList.add('hidden');
              }
            })
          } 
        toggleTool(){
        
          const playscr = document.querySelector(".playscr");
          document.addEventListener("click", function(e){
           
          })
       
    
        }
}



export default MovieView;