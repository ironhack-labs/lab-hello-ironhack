import React from "react";
import Feature from "./feature"
import "../stylesheets/features.scss";
import one from "../images/icon1.png";
import two from "../images/icon2.png";
import three from "../images/icon3.png";
import four from "../images/icon4.png";

function Features(){
    return(
        <div className="d-flex container">
            <Feature name="Declarative" avatar={one} description="React makes it painless to create interactive UIs"/>
            <Feature name="Components" avatar={two} description="Build encapsulated components that manage their state"/>
            <Feature name="Single-Way" avatar={three} description="A set of immutable values are passed to the component"/>
            <Feature name="JSX" avatar={four} description="Statically typed, designed to run on modern browsers"/>
        </div>
    )
}

export default Features