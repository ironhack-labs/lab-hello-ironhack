import React from "react";
import "./logo.css";


export default function logoIH(logo){
    return <div className="logo-container"
    style={{
        background: logo.bg,
    }}
    >
    <img alt="logo"
    className="logo-image" src="images/ironhack-logo.svg"/>
    </div>
}

