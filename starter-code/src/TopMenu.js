import React, { Component } from "react";
import "./TopMenu.css";

class TopMenu extends Component {
    render() {
        return (
        <div className="TopMenu">
            <div className="logo">
                <img src="/images/ironhack-logo.svg" alt="ironhack-logo" />
            </div>
            <div className="menu-tag">
                <img src="/images/menu-top.svg" alt="menu-icon" />
            </div>

        </div>
        );
    }
  }

  export default TopMenu;