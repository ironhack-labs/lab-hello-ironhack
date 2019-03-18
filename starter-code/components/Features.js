import React from "react"
import FeatureBox from "./FeatureBox"

function Features () {
    return (
        <section className="features">
            <FeatureBox title="Declarative" text="React makes it painless to create interactive UIs" pic="images/icon1.png" />
            <FeatureBox title="Components" text=" Build encapsulated components that manage their state" pic="images/icon2.png" />
            <FeatureBox title="Single-Way" text="A set of inmutable values are passed to the components" pic="images/icon3.png" />
            <FeatureBox title="JSX" text="Statically typed, designed to run on modern browsers" pic="images/icon4.png" /> 
        </section>    
        )
}

export default Features