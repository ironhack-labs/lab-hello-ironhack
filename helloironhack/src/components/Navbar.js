import './App.css'
import logo from './ironhack-logo.svg'
import menu from './menu-top.svg'



const Navbar = props => {
    const className = "navigator"
    const fullComponent = (
        <>
            <nav className={className}>
            <img src={logo} alt={props.description1} />
            <img src={menu} alt={props.description2} />
            </nav>
        </>
    )
    return fullComponent
}



export default Navbar