
import Header from '../layouts/header';
import { IcHeartActiveIcon,IcBellIcon,IcHeartNoActiveIcon } from '../../resources/assets/icons';
import leftNav from '../layouts/leftNav';
const HomePage = () => {
    return`
    <section class="main-section">
    <div class="main-section-nav--left">
    ${leftNav()}
    </div>
    <div class="main-section-content--right">
<<<<<<< Updated upstream
=======
    <div class = "addMovieForm hidden">
    <div class="addMovieForm-con">
       <form>
         <div >
           <label>Movie name</label>
           <input class = "inputAddField-Name" type="text" placeholder="Movie name" name="name">
         </div>
         <div>
           <label>Year of release</label>
           <input  class = "inputAddField-Date" type="date" name="date">
         </div>
         <div >
           <label>Poster</label>
           <input class = "inputAddField-Poster" type="file" name="poster" accept=".jpg,.png,image/jpeg,image/png" placeholder="Select file">
         </div>
         <div >
           <label>Video</label>
           <input class = "inputAddField-Video" type="file" accept=".mp4">
         </div>
         <div >
           <label>Type</label>
           <select class = "inputAddField-Type" name="movieTypeSl">
             <optgroup label="For Children">
               <option value="Cartoon">Cartoon</option>
               <option value="Comedy">Comedy</option>
             </optgroup>
             <optgroup label="Crime/Detective">
               <option value="Courtroom drama">Courtroom drama</option>
               <option value="Crime and Gangster Films">Crime and Gangster Films</option>
               <option value="Documentary">Documentary</option>
               <option value="Biography">Biography</option>
             </optgroup>
             <optgroup label="Entertaiment">
               <option value="Drama">Drama</option>
               <option value="Musical">Musical</option>
               <option value="Sitcom movie">Sitcom movie</option>
             </optgroup>
             <optgroup label="Together">
               <option value="Family">Family</option>
               <option value="Historical">Historical</option>
               <option value="Romance">Romance</option>
               <option value="War">War</option>
               <option value="Western">Western</option>
               <option value="Thriller">Thriller</option>
               <option value="Tragedy">Tragedy</option>
               <option value="Science fiction">Science fiction</option>
             </optgroup>
           </select>
         </div>
         <div >
           <label>Evaluate</label>
           <select class = "inputAddField-Evaluate" name="movieEvaluateSl">
             <optgroup label="1 Star">
              <option value="1.0">1.0</option>
              <option value="1.1">1.1</option>
              <option value="1.2">1.2</option>
              <option value="1.3">1.3</option>
              <option value="1.4">1.4</option>
              <option value="1.5">1.5</option>
              <option value="1.6">1.6</option>
              <option value="1.7">1.7</option>
              <option value="1.8">1.8</option>
              <option value="1.9">1.9</option>
             </optgroup>
             <optgroup label="2 Stars">
              <option value="2.0">2.0</option>
              <option value="2.1">2.1</option>
              <option value="2.2">2.2</option>
              <option value="2.3">2.3</option>
              <option value="2.4">2.4</option>
              <option value="2.5">2.5</option>
              <option value="2.6">2.6</option>
              <option value="2.7">2.7</option>
              <option value="2.8">2.8</option>
              <option value="2.9">2.9</option>
             </optgroup>
             <optgroup label="3 Stars">
              <option value="3.0">3.0</option>
              <option value="3.1">3.1</option>
              <option value="3.2">3.2</option>
              <option value="3.3">3.3</option>
              <option value="3.4">3.4</option>
              <option value="3.5">3.5</option>
              <option value="3.6">3.6</option>
              <option value="3.7">3.7</option>
              <option value="3.8">3.8</option>
              <option value="3.9">3.9</option>
             </optgroup>
             <optgroup label="4 Stars">
              <option value="4.0">4.0</option>
              <option value="4.1">4.1</option>
              <option value="4.2">4.2</option>
              <option value="4.3">4.3</option>
              <option value="4.4">4.4</option>
              <option value="4.5">4.5</option>
              <option value="4.6">4.6</option>
              <option value="4.7">4.7</option>
              <option value="4.8">4.8</option>
              <option value="4.9">4.9</option>
             </optgroup>
             <optgroup label="5 Stars">
              <option value="5.0">5.0</option>
             </optgroup>
             </select>
         </div>
         <div>
           <label>Description</label>
           <input  class = "inputAddField-Description" type="text" placeholder="Description">
         </div>
         <button class="btn btn-primary addmoviebtn" id="AddNewMovie">Add</button>
       </form>
    </div>
 </div>
    <div class="header-title">
>>>>>>> Stashed changes
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
    </div>
    </section>
    `;

};

export default HomePage;
