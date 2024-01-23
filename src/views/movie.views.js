import { createToast, removeToast } from "./components/handleToast";
import debounce from '../helper/debounce';
import PreLogin from './pages/PreLogin';
import MovieLogin from './modules/MovieLogin';
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
        this.app.innerHTML += MovieLogin({});
        this.formGetinfor = this.app.querySelector('.form-getinfor');
    }
   toggleLoginMovie(open = true){
     if(this.formGetinfor.classList.contains('hidden')&& open){
        this.formGetinfor.classList.remove('hidden');
        this.main.classList.add('blur');
   }else if(!open){
    this.formGetinfor.classList.add('hidden');
    this.main.classList.remove('blur');
   }
}
   handleToggleLoginMovie(){
    const submitBtn = this.app.querySelector(".submit-btn");
    const openLogin = document.querySelector(".btn-log");
    const closebtn = this.app.querySelector(".icon-close");
    openLogin.addEventListener('click', (e)=>{
        e.preventDefault();
        if(this.formGetinfor.classList.contains('hidden')){
            this.formGetinfor.classList.remove('hidden');
            this.main.classList.add('blur');

        }
    });
    closebtn.addEventListener('click',(e)=>{
        e.preventDefault();
        this.formGetinfor.classList.add("hidden");
        this.main.classList.remove('blur');
    })
   }
   checkValidForm(){
    const inputs = [...this.formGetinfor.querySelectorAll('input')];
    return !inputs.some((input)=>input.classList.contains('invalid'))
   }
   submitForm(handle, name){
    const userData = collectData(this.formGetinfor);
    name ? handle(name, userData) : handle(userData); 
   }
   handleLogin(handle){
    const logButton = this.formGetinfor.querySelector(".submit-btn");
    logButton.addEventListener('click',(e)=>{
        e.preventDefault();
        if(this.checkValidForm()){
            this.submitForm(handle);
            // this.toggleLoginMovie(false);
            const inputs =[...this.formGetinfor.querySelectorAll('input')]; 
                  const inputName = inputs[0].value;
                  const inputPassword = inputs[1].value;
                  if(inputName && inputPassword){
                    this.submitForm(handle, inputName);
                  }else{
                    createToast('warning','Please fill all the fields');
                  } 

           
        }else{
            createToast('warning','Please fill all the fields');
        }
    });
    
   }
}

export default MovieView;