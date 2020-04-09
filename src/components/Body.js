import React, { Component } from "react";

  
  class Body extends Component {
    render() {
        return (
        <body className="body">
            <div className="body-container">
                <img className="body-icon" alt="body-icon" src="images/icon1.png"/>
                <h2 className="body-title">Declarative</h2>
                <p className="body-subtitle">React makes it painless to create interactive UIs</p>
            </div>

            <div className="body-container">
                <img className="body-icon" alt="body-icon" src="images/icon2.png"/>
                <h2 className="body-title">Components</h2>
                <p className="body-subtitle">Build encapsulated Components that manage their state</p>
            </div>

            <div className="body-container">
                <img className="body-icon" alt="body-icon" src="images/icon3.png"/>
                <h2 className="body-title">Single-Way</h2>
                <p className="body-subtitle">A set of immutable values are passed to the components</p>
            </div>

            <div className="body-container">
                <img className="body-icon" alt="body-icon" src="images/icon4.png"/>
                <h2 className="body-title">JSX</h2>
                <p className="body-subtitle">Statically-typed, designed to run on modern browsers</p>
            </div>
        </body>
        )
    }
}

export default Body;