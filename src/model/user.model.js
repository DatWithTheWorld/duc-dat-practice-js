class User{
    constructor({id, name, password, email, avatar,favorite}){
       this.id = id;
       this.name = name;
       this.password = password;
       this.email = email;
       this.avatar = avatar;
       this.favorite = favorite;
    }
}

export default User;