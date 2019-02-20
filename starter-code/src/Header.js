import React, { Component } from "react";
import "./app.css";

class Header extends Component {
    render() {
      return (
        <section>
            <nav className="first-container">
                <img className="navElement" src="./images/ironhack-logo.svg"></img>
                <img className="navElement" src="./images/menu-top.svg"></img>
            </nav>

            <main id="wrapper">
                <h1>Say Hello to React</h1>
                <p>Ble Blo Blu Ble Blo Blu Ble Blo Blu Ble Blo Blu Ble Blo Blu Ble Blo Blu</p>
                <button>
                    Awesome!
                </button>
            </main>          

        </section>
      );
    }
}

export default Header;
