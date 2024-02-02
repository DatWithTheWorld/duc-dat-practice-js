import Header from '../layouts/header';
import { IcHeartActiveIcon,IcBellIcon,IcHeartNoActiveIcon,PngTkoTrain } from '../../resources/assets/icons';
import leftNav from '../layouts/leftNav';
import cardTrending from '../components/cardTrending';
const HomePage = () => {
    return`
    <section class="main-section">
    <div class="main-section-nav--left">
    ${leftNav()}
    </div>
    <div class="main-section-content--right">
    ${Header()}
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
    <div class="movie-center">
    <button class = "btn-primary btn-add">Add new</button>
    <div class="movie-center-trending">
    <h3>Trending</h3>
    <div class="movie-center-trending-card">
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    </div>
    </div>
    <div class="movie-center-continue">
    <h3>Continue watching</h3>
    <div class="movie-center-continue-card">
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
 
    </div>
    </div>
    </div>
    </div>
    </section>
    `;

};

export default HomePage;
