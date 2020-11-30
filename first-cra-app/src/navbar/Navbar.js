import logo from './ironhack-logo.svg';
import menu from './menu.png';
const Navbar = () => {
    return (
        <nav className="navbar  navbar-bg">
            <div className="container">
                <a><img src={logo} className="App-logo" alt="logo" width="50px" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><img src={menu} /></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar