import React, { Component } from "react";
import "./styles.css";

export default function HeaderMain() {
    return (
        <div>
        <ul className="list">
            <li className="element"><img src="images/icon1.png" alt="icon1"/>
                <h2>Declarative</h2>
            <p>React makes it 
                <br/>
                painless to create
                <br/>
                interactive UIs</p></li>
            <li className="element"><img src="images/icon2.png" alt="icon2"/>
                <h2 className="center">Components</h2>
            <p className="center">Build encapsulated 
            <br/>
            components that 
            <br/>
            manage their state.</p></li>
            <li className="element"><img src="images/icon3.png" alt="icon3"/>
                <h2 className="center">Single-Way</h2>
            <p className="center" >A set of immutable 
            <br/>
            values are passed to 
            <br/>
            the component's.</p></li>
            <li className="element"><img src="images/icon4.png" alt="icon4"/>
                <h2 className="center">JSX</h2>
            <p className="center">Statically-typed 
            <br/>
            designed to run on 
            <br/>
            modern browsers.</p></li>
        </ul>
    </div>
    );
  }