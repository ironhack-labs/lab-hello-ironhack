import "./Header.css"

const NavBar = props => {
    return (
        <article className = "navBar">
            <img src={props.avatar1} />
            <img className = "menu" src={props.avatar2} />
        </article>
    )
}

export default NavBar