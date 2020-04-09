import React, { Component } from "react";
  
class Header extends Component {
    render() {
        return (
        <header className="">
            <div className="">
                <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
                <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
                <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
                <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
                <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
                <img alt="react-logo" class="react-logo" src="images/react-logo.svg" />
            </div>
            <div className="">
                <h1 className="">Say Hello to ReactJS!</h1>
                <p className="">You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
                <button className="">Awesome!</button>
            </div>
        </header>
        );
    }
}

export default Header;