import React, { Component } from "react";
  
class Header extends Component {
    render() {
        return (
        <header className="App-header">
            <div className="react-logos">
                <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
                <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
                <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
                <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
                <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
                <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
            </div>
            <div className="text-header">
                <h1 className="title-header">Say Hello to ReactJS!</h1>
                <p className="subtitle-header">You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
                <button className="button-header">Awesome!</button>
            </div>
        </header>
        );
    }
}

export default Header;