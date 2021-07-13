import React, {Component} from "react";
import "./App.css";

class Header extends Component {
    render() {
        return (
            <div className= "Header">
                <div>
                <img src= "../images/react-logo.svg" alt="Logo React"></img>
                <img src= "../images/react-logo.svg" alt="Logo React"></img>
                <img src= "../images/react-logo.svg" alt="Logo React"></img>
                <img src= "../images/react-logo.svg" alt="Logo React"></img>
                <img src= "../images/react-logo.svg" alt="Logo React"></img> 
                <img src= "../images/react-logo.svg" alt="Logo React"></img> 

                </div>
                <img src= "../images/ironhack-logo.svg" alt="Logo"></img> 
                <img src= "../images/menu-top.svg" alt="Menu"></img>
                <h1>Say Hello To ReactJS</h1>
                <p>You will learn a frontend framework from scratch</p>
                <button>Awesome</button>
            </div>
        )
    }
}
export default Header;