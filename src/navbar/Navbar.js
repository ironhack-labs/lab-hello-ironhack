import ihLogo from "./ironhack-logo.svg"
import menu from "./menu-top.svg"
import "./navbar.css"

const Navbar = props => {
    return (
        <div class = "navbar">
        <img src={ihLogo}></img>
            <img src={menu}></img>
            </div>
    )
    
}

export default Navbar