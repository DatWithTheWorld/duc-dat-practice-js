
import { IcHeartActiveIcon } from "../../resources/assets/icons";

function cardTrending(movie){
    return `
    <div class="card-trending">
    <figure class="card-trending-figure">
    <img src="http://localhost:3000/${movie.poster}.png"> 
    </figure>
    <button class="btn-addFavorite">
    <figure class="card-trending-status">
    <img src="http://localhost:3000/${movie.favorites}.svg"> 
    </figure>
    </button>
    <div class="card-trending-content">
    <h3 class="card-trending-title">${movie.name}</h3>
    <div class="card-trending-block">
    <span class="card-trending-year">${movie.year}</span>
    <span class="card-trending-type">${movie.type}</span>
    </div>
    </div>
    </div>
    `;
}
export default cardTrending;
