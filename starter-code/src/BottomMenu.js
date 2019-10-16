import React, { Component } from "react";
import "./BottomMenu.css";

class BottomMenu extends Component {
    render () {
        return (
            <div className="icons-container">
                    <div className="icon-item"><img src='/images/icon1.png' />
                        <h1>Declarative</h1>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div className="icon-item"><img src='/images/icon2.png' />
                        <h1>Components</h1>
                        <p>Build encapsulated componets that manage their state.  .</p>
                    </div>
                    <div className="icon-item"><img src='/images/icon3.png' />
                        <h1>Single-way</h1>
                        <p> A set of immutable values are passed to the component's.</p>
                    </div>
                    <div className="icon-item"><img src='/images/icon4.png' />
                        <h1>JSX</h1>
                        <p>Statically-typed, dsegined to run on modern browsers.</p>
                    </div>
            </div>
        )
    }
}

export default BottomMenu;