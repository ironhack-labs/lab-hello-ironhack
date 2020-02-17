import React from 'react'
import "./styles/App.css";

import Navbar from "./components/Navbar";
import Principal from "./components/Principal";
import Card from "./components/Card";

export default function App() {
    return (
        <div className="App">
            <Navbar
                logo="./images/ironhack-logo.svg"
                menu="./images/menu-top.svg"
            />
            <Principal
                title="Say hello to ReactJS"
                paragraph="You will learn a Fronted framework from scratch, to become a Ninja Developer."
                btn="Awesome!"
                reactLogo="./images/react-logo.svg"
            />
            <div className="cards">
            <Card
                icon="./images/icon1.png"
                subTitle="Declarative"
                description="React makes it painless to create interactive UIs."
            />
            <Card
                icon="./images/icon2.png"
                subTitle="Components"
                description="Build encapsulated components that manage their state."
            />
            <Card
                icon="./images/icon3.png"
                subTitle="Single-Way"
                description="A set of immutable values are passed to the component's."
            />
            <Card
                icon="./images/icon4.png"
                subTitle="JSX"
                description="Statically-typed, designed to run on modern browsers."
            />
            </div>
        </div>
    )
}



