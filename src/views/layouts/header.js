import { IcSearchIcon,
  IcBellIcon,
  IcHeartActiveIcon,
  IcHeartNoActiveIcon

} from "../../resources/assets/icons";
import navChild from "../components/navChild";
const arraynav = ["Movies","Series","Documentaties"];
const arrayicons = [`<figure><img src = "${IcSearchIcon}"></figure>`,`<figure ><img src = "${IcBellIcon}"></figure>`,`<figure class="avatar-icon"><img src ="https://yt3.googleusercontent.com/flfmr7SymUdWxl-Og9zKop5zJacdXf5PYwPVJzVfLWlMIQEo0DvmcD5L9l2W7eOZ-N4fQqgXkA=s900-c-k-c0x00ffffff-no-rj"></figure><p class="user-name">DatBrao</p>`];
const Header = () =>{
    return`
    <header class="header-container">
      <nav class="nav-container">
        <ul>${navChild(arraynav)}</ul>      
        <ul>${navChild(arrayicons)}</ul>
      </nav>
      <div class="header-title">
      <p class="movie-name">Insider</p>
      <div class="movie-details">
      <span class="movie-details-year">2022</span>
      <span class="movie-details-type">Comedy horor</span>
      <span class="movie-details-season">1 Season</span>
      </div>
      <div class="button-group">
      <button class = "btn-primary btn-watchNow">Watch now</button>
      <button class = "heart"><img src = "${IcHeartNoActiveIcon}"></button>
      </div>
      </div>
    </video>
    </header>
    `;
};
export default Header;
