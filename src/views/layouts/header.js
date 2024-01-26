const arraynav = ["Movies","Series","Documentaties"];
import navChild from "../components/navChild";
const Header = () =>{
    return`
    <header class="header-container">
      <nav class="nav-container">
        <ul>${navChild(arraynav)}</ul>
      </nav>
    </header>
    `;
};
export default Header;