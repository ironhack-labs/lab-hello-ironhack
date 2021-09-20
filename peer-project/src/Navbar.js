import './Navbar.css'
import logo from './ironhack-logo.svg'
import menulogo from './menu-top.svg'

function Navbar(props) {

    return (
      <navbar className={props.className}>
        <img src={logo}></img>
        <img src={menulogo}></img>
      </navbar>
    )
}

export default Navbar