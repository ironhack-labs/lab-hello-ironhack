import React, { Component } from "react";
import BigSquare from "./components/BigSquare";
import InfoBox from "./components/InfoBox";
import "./App.css";




class App extends Component {
    render() {
        return (
            <div className="App">
                <BigSquare
                    logo = "/images/ironhack-logo.svg"
                    menu = "/images/menu-top.svg"
                    react = "/images/react-logo.svg"
                    header = "Say hello to ReactJS"

                    text = "You will learn a Frontend framework from scratch, to become a Ninja Developer."
                    awesome = "Awesome!"
                />
             
                <InfoBox
                    image ="/images/icon1.png"
                    header = "Declarative"
                    text = "React makes it painless to create interactive UIs."
                />
                <InfoBox
                    image ="/images/icon2.png"
                    header = "Components"
                    text = "Build encapsulated components that manage their state."
                />
                <InfoBox
                    image ="/images/icon3.png"
                    header = "Single-Way"
                    text = "A set of immutable values are passed to the components."
                />
                <InfoBox
                    image ="/images/icon4.png"
                    header = "JSX"
                    text = "Statidally type, designed to run on modern browsers."
                />
            </div>
        )

    }
}
    export default App;