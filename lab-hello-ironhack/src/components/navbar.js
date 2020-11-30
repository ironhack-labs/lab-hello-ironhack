import './navbar.css';
import logo from '../logo-ironhack.png';
import menuLogo from '../burger.png';

function Navbar() {

    return (
            <nav className="Navbar">
                <img src={logo} alt="logo-ironhack"/>
                <img className="image-menu" src={menuLogo} alt="menu-burger"/>
            </nav>

    );
}

export default Navbar;
