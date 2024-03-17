import { IcHeartActiveIcon, PngTkoTrain } from "../../resources/assets/icons";
import cardTrending from "../components/cardTrending";
import Header from "../layouts/header";
import leftNav from "../layouts/leftNav";

const Favorite = () =>{
return `
<section class="main-section">
<div class="main-section-nav--left">
${leftNav()}
</div>
<div class="main-section-content--right">
${Header()}
<h3 class="hd-favorite">Favorites</h3>
<div class="favorite">
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
</div>
</section>
`;
};
export default Favorite;
