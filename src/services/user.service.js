import User from '../model/user.model';
import api from '../api/movies';
import {createToast} from '../views/components/handleToast';
class UserService{
    constructor(){
        this.users = [];
    }

    async getAllUsers(){
        try{
             let {data} = await api.get('/users');
             if(data){
                data = await data.map((user) => new User(user));
                this.users = data;
                
             }
        }catch(e){
                createToast('error', error);
        }
    }
    async LoginUsers(){
        this.getAllUsers();
    }
}
