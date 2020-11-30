import React from "react";
import "./main.css"
const icon1 = "/images/littleNicky.png"
const icon2 = "/images/forrest.png"
const icon3 = "/images/mcLovin.png"
const icon4 = "/images/ace.jpg"

function BottomHalf() {
    return (
        <bottom className="main-bottom-half">
            <div className="icon-cards">
                <img src={icon1} className="bottom-card-image" alt=""></img>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UI's</p>
            </div>
            <div className="icon-cards">
                <img src={icon2} className="bottom-card-image" alt=""></img>
                <h3>Components</h3>
                <p>Build encapsulated componnav-logoat manage their state</p>
            </div>
            <div className="icon-cards">
                <img src={icon3} className="bottom-card-image" alt=""></img>
                <h3>Single-Way</h3>
                <p>A set of immutable valuesnav-logossed to the component's</p>
            </div>
            <div className="icon-cards">
                <img src={icon4} className="bottom-card-image" alt=""></img>
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </bottom>
    )
}

export default BottomHalf;