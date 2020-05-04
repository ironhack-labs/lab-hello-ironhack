import React from "react";
import "./Main.css"
import Card from "../card/Card"

const Main = () => {
    
    return (
      <section className="features">
        <Card img="./img/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs." />
        <Card img="./img/icon2.png" title="Components" text="Build encapsulated components that manage their state" />
        <Card img="./img/icon3.png" title="Single-Way" text="A set of inmutable values are past to the component's" />
        <Card img="./img/icon4.png" title="JSX" text="Statically-typed, designed to run on modern browsers" />
      </section>
    );



}


export default Main