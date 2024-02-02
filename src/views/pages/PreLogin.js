
import {LgLogoMainIcon} from '../../resources/assets/icons';
const PreLogin = () => {
return `
 <form class = "pk-form-prelogin">
  <div class = "form-prelogin">
    <div class = "form-prelogin-title">
    <figure><img src = "${LgLogoMainIcon}"></figure>
        <p>Enjoy the newest movies</p>
    </div>
    <div class = "form-prelogin-behavior">
    <button class = "btn-primary">Log in</button>
    <p>No account ? <a href="#" >Sign up</a></p>
    </div>
 </form>
`;
};
export default PreLogin;
