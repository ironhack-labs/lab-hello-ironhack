import './Navbar.css';
import ironhack from './ironhack-logo.svg'
import menu from './menu-top.svg'

const Navbar = () => {
    return (
        <div className="navBar">
            <img src={ironhack} alt="ironhack logo" />
            <img src={menu} alt="hamburguesa" />
        </div>
    )
}

export default Navbar