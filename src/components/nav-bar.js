import './nav-bar.css'

let NavBar = props => {
    let image=props.logo
    let burger=props.burger
    return(<div class='nav-logo' >
        <img class='log1' src={image}/>
        <img class='log2' src={burger}/>
        </div>
    )
}

export default NavBar