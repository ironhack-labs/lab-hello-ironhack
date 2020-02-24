import React from "react";
import "./HeroBanner.css";

function HeroBanner() {
    return (
        <div className="HeroBanner">
            <div id="nav-container">
                <a href="/"><div id="logo"></div></a>
                <a href="#"><div id="menu"></div></a>
            </div>
            <div id="banner-container">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn a frontend framework from scartch!</p>
                <button>awesome!</button>
            </div>
            
            
        </div>
    )
}

export default HeroBanner
