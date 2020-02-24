import React from "react";
import "./ReactUSPs.css";

let usps = [
    {
    headline: "Declarative",
    text: "react makes it painless to create interative UIs",
    img: "/images/icon1.png"
    },
    {
    headline: "Components",
    text: "Building encapsulated components that manage their state",
    img: "/images/icon2.png"
    },
    {
    headline: "Single-Way",
    text: "A set of immutable values are passed to their components",
    img: "/images/icon3.png"
    },
    {
    headline: "JSX",
    text: "Statically typed, designed to run on modern web-browsers.",
    img: "/images/icon4.png"
    }
]


export default class ReactUSPs extends React.Component {
    render() {
        return (
            <div id="usps-container">
                {usps.map(function(usp){
                    return <div class="usp-box"><img src={usp.img}></img> 
                                <h3>{usp.headline}</h3>
                                <p>{usp.text}</p>
                            </div>
                    }
                  )}
            </div>
        )
    }
}
