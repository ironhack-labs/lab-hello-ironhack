//import logo from '../../public/images/ironhack-logo.svg'; // importing logo from src folder
import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className="logoImg">
                    <img src="images/ironhack-logo.svg" className="App-logo" alt="logo" />
                    <img src="images/menu-top.svg" className="menu-logo" alt="menu-logo" />
                </div>
                <div>
                    <h1 className="App-title">SAY HELLO TO <br /> REACTJS</h1>
                    <h3>You will learn a Frontend <br/> Framework from scratch, to<br /> become a Ninka Developer.</h3>
                </div>

                <img src="images/react-logo.svg" className="react-logo1" alt="react-logo" />
                <img src="images/react-logo.svg" className="react-logo2" alt="react-logo" />
                <img src="images/react-logo.svg" className="react-logo3" alt="react-logo" />
                <img src="images/react-logo.svg" className="react-logo4" alt="react-logo" />
                <img src="images/react-logo.svg" className="react-logo5" alt="react-logo" />
                <img src="images/react-logo.svg" className="react-logo6" alt="react-logo" />
                <p className="awesomeBlock">Awesome!</p>
            </header>
        )
    }

}

/*
//second way of making a component
const header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React, Ironhacker!</h1>
            <h3>You are ready to take this to the next level!</h3>
        </header>
    );
}
*/
export default Header;