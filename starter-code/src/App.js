import React from "react";
import "./App.css";
import HeroBanner from "./parts/HeroBanner.js"
import ReactUSPs from "./parts/ReactUSPs.js"

export default class App extends React.Component {
    state = {};
    render() {
        return (
            <div className="MainContainer">
                <HeroBanner />
                <ReactUSPs />
            </div>
        );
    }
}