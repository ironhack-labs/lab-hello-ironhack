import React, { Component } from "react";
import Nav from "../src/components/nav/nav.js"
import "../src/components/nav/nav.css"

import Content from "../src/components/content/content.js"
import "../src/components/content/content.css"

import Icons from "../src/components/icons/icons.js"
import "../src/components/icons/icons.css"
class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav></Nav>
                <Content></Content>
                <Icons></Icons>
            </div>
        );
    }
}

export default App;