import React, { Component } from "react";
import ironhackLogo from "../assets/ironhack-logo.svg";

class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <img src={ironhackLogo} alt="" />
            </div>
        );
    }
}

export default Navigation;
