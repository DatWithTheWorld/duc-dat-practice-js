import { IcHeartActiveIcon, IcStarIcon } from "../../resources/assets/icons";

function CardDetail(movies){
   return `
   <div class="card-details" data-id="${movies.mid}">
   <figure><img src="http://localhost:3000/${movies.poster}.png"></figure>
 <div class="card-details-content">
     <div class="card-details-content-firstline">
             <h2 class="title">${movies.name}</h2>
         <div class="evaluate">
             <figure><img src="${IcStarIcon}"></figure>
          <div class="evaluate-content">
              <span class="evaluate-value">${movies.evaluate}</span>/10
           </div>
         </div>
      </div>
      <div class="card-details-content-secondline">
      <span class="year">${movies.year}</span>
      <span class="genre">${movies.type}</span>
      <span class="time">${movies.duration}</span>
      </div>
      <p class="card-details-content-description">
       ${movies.description}
      </p>
      <div class="card-details-content-button">
      <button class="btn btn-primary">Watch now</button>
      <button class="stt"><figure><img src="${IcHeartActiveIcon}"></figure></button>
      </div>
 </div>
</div>
   `;
}
export default CardDetail;