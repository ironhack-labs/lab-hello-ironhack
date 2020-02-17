import React from 'react'

import Nav from "./components/Nav";
import Header from "./components/Header";
import Thumbnail from "./components/Thumbnail";
import "./styles/App.css";

export default function App() {
    return (
        <div className="App">
            <Nav 
                logo="/images/ironhack-logo.svg"
                menu="/images/menu-top.svg"
            />
            
            <Header 
                title="Say hello to ReactJS"
                info="You will learn a Frontend framework from scratch, to become a Ninja Developer"
            />

            <div className="thumbnails-wrapper">
                <Thumbnail
                    icon="/images/icon1.png"
                    title="Declarative"
                    info="React makes it painless to create interactive UIs."
                />
                <Thumbnail
                    icon="/images/icon2.png"
                    title="Components"
                    info="Build encapsulated components that manage their state."
                />
                <Thumbnail
                    icon="/images/icon3.png"
                    title="Single-Way"
                    info="A set of immutable values are passed to the component's."
                />
                <Thumbnail
                    icon="/images/icon4.png"
                    title="JSX"
                    info="Statistically-typed, designed to run on modern browsers."
                />
            </div>
            
        </div>
    )
}
