import React, { Component } from "react";
import "./App.css";
class Header extends Component {
    render() {
        return (
            <div>

                <div className="navbar">
                    <img src="../images/ironhack-logo.svg" alt="IronHack Logo"></img>
                    <img src="../images/menu-top.svg" alt="Menu Image"></img>
                </div>

      
                <div className="images">
                    <img className="imageG" src="../images/react-logo.svg"></img>
                    <img className="imageM" src="../images/react-logo.svg"></img>
                    <img className="imageM2" src="../images/react-logo.svg"></img>
                    
                </div>
                <div className="imagesColum" >
                    <img className="imageP" src="../images/react-logo.svg"></img>
                    <img className="imageP" src="../images/react-logo.svg"></img>
                    <img className="imageP" src="../images/react-logo.svg"></img>
                </div>

                <div className="Header" >

                    <div className="textheader">
                        <h1>Say Hello To ReactJS</h1>
                        <p>You will learn a frontend framework from scratch</p>
                        <button>Awesome!</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;