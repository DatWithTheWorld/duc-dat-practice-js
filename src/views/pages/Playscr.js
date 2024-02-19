import { IcMaximizeIcon, IcPauseIcon, IcSlidersIcon, IcVolumeIcon } from "../../resources/assets/icons";

const Playscr = (videolink,timing,maxtime) => {
      return `
      <div class="playscr">
        <video id="playsrcvd" width="100%" height="100%" controls controlsList="nofullscreen">
            <source src="../../resources/Video/video.mp4" type="video/mp4">
        </video>
        <div class="playscr-bar">
            <figure>
                <img src="${IcPauseIcon}">
            </figure>
            <progress id="progress" value="60" max="100"></progress>
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
      `;
}

export default Playscr;