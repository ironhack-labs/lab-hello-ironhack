import iconIronhack from './image/ironhack-logo.svg'
import menuImg from './image/menu-top.svg'
import reactLogo from './image/react-logo.svg'
import './Header.css'

const Header = props => {
    return (<div className="header">
        <div className="navbar">
            <img src={iconIronhack} alt="Icon ironhack" />
            <img src={menuImg} alt="menu" />
        </div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <button>{props.btn}</button>
    </div>)
}

export default Header