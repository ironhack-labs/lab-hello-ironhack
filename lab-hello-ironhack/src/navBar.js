import './navBar.css'

function NavBar(){
const menu ='./menu-top.svg'
const logo ='./ironhack-logo.svg'
    return(
        <div className="NavBar">
        <div className="container">
        <img src={logo} className="logo" alt="logo" />
        <img src={menu} className="menu-top" alt="menu" />
        </div>
        <div className="container1">
        <div className="col">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button>Awesome!</button>
        </div>
        <div className="col">
        </div>
        </div>
        </div>
    )
}

export default NavBar
