import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "./App.css";


class App extends Component {
    render () {
        return (
            <section>
                <Header></Header>
                <Footer></Footer>
            </section>
        );
    };
};

export default App;