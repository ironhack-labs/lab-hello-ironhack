import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="headerText">
                    <div className="textH1-container">
                        <h1 className="textH1">Say hello to {"\n"} ReactJS</h1>
                    </div>
                    <div className="textH2-container">
                        <p className="textH2">You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
                    </div>
                    <div className="buttonHeader" href="#">Awesome!</div>
                </div>
            </div>
        );
    }
  }

  export default Header;