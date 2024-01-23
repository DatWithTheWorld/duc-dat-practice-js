const MovieLogin = ({name = null , password = null}) =>{
return  `<form class = "form-getinfor hidden">
<div class = "form-getinfor-child">
<div class = "icon-close" ><i class = "ti-close"></i></div>
<input type = "text" name = "name" placeholder = "Name" >
<input type = "password" name = "password" placeholder = "Password" >
<button class = "submit-btn" type="submit">Submit</button>
</div>
</form>`;


}
export default MovieLogin;