import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import BodyMain from "./BodyMain"
import Footer from "./Footer"




class App extends Component {
    constructor() {
        super()

       

    }

    render() {
        return (
            <div className="App">
                <div className="bgimage">
                <NavBar />
                <BodyMain />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;