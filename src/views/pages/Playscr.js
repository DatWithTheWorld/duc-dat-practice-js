
import { IcMaximizeIcon, IcPauseIcon, IcPlayCircleIcon, IcReturnIcon, IcSlidersIcon, IcVolumeIcon } from "../../resources/assets/icons";

const Playscr = (videolink,timing,maxtime) => {
      return ` 
      <video id="playsrcvd" width="100%" height="100%" autoplay controls>
        <source src="http://localhost:3000/food.mp4" type="video/mp4">
      </video>
      <div class="playscr">
        <figure class="playcircle hidden">
        <img src="${IcPlayCircleIcon}">
        </figure>
        <figure class="returnbtn hidden">
        <img src="${IcReturnIcon}">
        </figure>
        <div class="playscr-bar-con hidden">
        <div class="playscr-bar">
        <figure>
             <img src="${IcPauseIcon}">
        </figure>
        <div class="progress"></div>
        <span class="timevideo">11:23/39:04</span>
        <figure>
            <img src="${IcVolumeIcon}">
        </figure>
        <figure>
            <img src="${IcSlidersIcon}">
        </figure>
        <figure>
            <img src="${IcMaximizeIcon}">
        </figure>
    </div>
        </div>
      </div>
      `;
}

export default Playscr;

