
import Header from '../layouts/header';
import {
  IcHeartActiveIcon,
  IcBellIcon,
  IcHeartNoActiveIcon,
  PngTkoTrain,
} from '../../resources/assets/icons';
import leftNav from '../layouts/leftNav';
import cardTrending from '../components/cardTrending';
const HomePage = (movies = []) => {
  return `
    <section class="main-section">
    <div class="main-section-nav--left">
    ${leftNav()}
    </div>
    <div class="main-section-content--right">
    <div class = "addMovieForm hidden">
    <div class="addMovieForm-con">
       <form>
         <div class = "inputAddField-Name">
           <label>Movie name</label>
           <input type="text" placeholder="Movie name" name="name">
         </div>
         <div class = "inputAddField-Date">
           <label>Year of release</label>
           <input type="date" name="date">
         </div>
         <div class = "inputAddField-Poster">
           <label>Poster</label>
           <input type="file" name="poster" accept=".jpg,.png,image/jpeg,image/png" placeholder="Select file">
         </div>
         <div class = "inputAddField-Video">
           <label>Video</label>
           <input type="file" accept=".mp4">
         </div>
         <div class = "inputAddField-Type">
           <label>Type</label>
           <select name="movieTypeSl">
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
         <div class = "inputAddField-Evaluate">
           <label>Evaluate</label>
           <select name="movieEvaluateSl">
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
         <div class = "inputAddField-Description">
           <label>Description</label>
           <input type="text" placeholder="Description">
         </div>
         <button type="submit" class="btn btn-primary" id="AddNewMovie">Add</button>
       </form>
    </div>
 </div>
    <div class="header-title">
    ${Header()}
    <video id="topvideotrending" width="100%" height="100%" autoplay controls>
    <source src="http://localhost:3000/food.mp4" type="video/mp4">
  </video>
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
      
    </div>
    </div>
    <div class="movie-center-continue">
    <h3>Continue watching</h3>
    <div class="movie-center-continue-card">
    </div>
    </div>
    </div>
    </div>
    </section>
    `;
};

export default HomePage;
