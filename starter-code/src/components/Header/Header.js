import React from "react";
import Reactlogo from "../Reactlogo/Reactlogo.js";
import "./Header.css";
import Button from "../Button/Button.js";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <nav>
                    <img src="images/ironhack-logo.svg" />
                    <img src="images/menu-top.svg" />
                </nav>
                <div className="main">
                    <div className="left">
                        <h1>Say hello to <br />ReactJS</h1>
                        <p>You will learn a Frontend
                        <br />
                            framework from scratch to
                        <br />
                            become an Ninka Developer.
                    </p>
                        <Button />
                    </div>
                    <div className="right">
                        <Reactlogo/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;