import { LgLogoMainIcon } from '../../resources/assets/icons';
const PreLogin = () => {
  return `

 <div class = "pk-form-prelogin">
  <div class = "form-prelogin">
    <div class = "form-prelogin-title">
    <figure><img src = "${LgLogoMainIcon}"></figure>
        <p>Enjoy the newest movies</p>
    </div>
    <div class = "form-prelogin-behavior">
    <button class = "btn-primary btn-log">Log in</button>
    <p>No account ? <a href="#" class = "btn-signup" >Sign up</a></p>
    </div>
 </div>
 <div class  = "con-form-login">
    <form>
      <input class = "username-input" type = "text" placeholder = "Username">
      <input class = "userpassword-input" type = "password" placeholder = "Password">
      <button class = "btn-submit-login">Submit</button>
    </form>
 </div>
 <div class  = "con-form-regist">
    <form>
      <input class = "username-input" type = "text" placeholder = "Username">
      <input class = "userpassword-input" type = "password" placeholder = "Password">
      <input class = "useremail-input" type = "text" placeholder = "Email">
      <button class = "btn-submit-regist">Submit</button>
    </form>
 </div>
`;
};

export default PreLogin;
