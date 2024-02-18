import { IcHeartActiveIcon, IcStarIcon, PngTkoTrain } from "../../resources/assets/icons";
import cardTrending from "../components/cardTrending";
import Header from "../layouts/header";
import leftNav from "../layouts/leftNav";
const Trending = () => {
    return `
    <section class="main-section">
    <div class="main-section-nav--left">
    ${leftNav()}
    </div>
    <div class="main-section-content--right">
    ${Header()}
    <h3 class="hd-favorite">Trending at this moment</h3>
    <div class="movie-trending">
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    ${cardTrending(PngTkoTrain,IcHeartActiveIcon,'Tokyo Train','2022','Action comedy')}
    </div>
    <div class="card-details">
              <figure><img src="${PngTkoTrain}"></figure>
            <div class="card-details-content">
                <div class="card-details-content-firstline">
                        <h2 class="title">House of Wealth</h2>
                    <div class="evaluate">
                        <figure><img src="${IcStarIcon}"></figure>
                     <div class="evaluate-content">
                         <span class="evaluate-value">7.8</span>/10
                      </div>
                    </div>
                 </div>
                 <div class="card-details-content-secondline">
                 <span class="year">2022</span>
                 <span class="genre">Drama</span>
                 <span class="time">2h 38m</span>
                 </div>
                 <p class="card-details-content-description">
                 The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.
                 </p>
                 <div class="card-details-content-button">
                 <button class="btn btn-primary">Watch now</button>
                 <button class="stt"><figure><img src="${IcHeartActiveIcon}"></figure></button>
                 </div>
            </div>
    </div>
</div>
    </section>
    `;

}

export default Trending;
