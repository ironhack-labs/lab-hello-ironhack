import './Navbar.css'

const Navbar = props => {
    return(
    <navbar>
        <img src={props.logoImg} alt={props.logoAlt} />
        <img src={props.burgerImg} alt={props.burgerAlt} />
        </navbar>
    )
}

export default Navbar
