import React from 'react'
import "./App.css";
import Navbar from "./Navbar";
import Hello from "./Hello";
import InputAwesome from "./InputAwesome";
import IconSection from "./IconSection";

const App = () => {
    return (
        <div>
            <div className="blue-section">
            <Navbar/>

            <div className="leftside">
                <Hello/>
                <InputAwesome/>
            </div>
            </div>
            <div className="white-section">
                <IconSection img="./images/icon1.png" title="Declarative" message="icon1"/>
                <IconSection img="../images/icon2.png" title="Components" message="icon2"/>
                <IconSection img="../images/icon3.png" title="Single-Way" message="icon3"/>
                <IconSection img="../images/icon4.png" title="JSX" message="icon4"/>
            </div>
        </div>

    )
}

export default App

