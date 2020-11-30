import logo from './ironhack-logo.svg'
import menu from './menu-top.svg'
import './navbar.css'


const Nav = props => {

    return (
    <section className="nav">
            <img src={logo} alt="ironhack-logo" />
            <img src={menu} alt="ironhack-logo" />       
    </section>
)
}

export default Nav