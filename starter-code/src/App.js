import React, { Component } from 'react';
import Feature from './components/Feature'


export default class App extends Component {

    constructor(props) {
        super(props)


        this.features = [
            {
                id: 1,
                fImg: "../images/icon1.png",
                fTitle: "Declarative",
                fText: "React makes it painless to create interactive UIs",
            },
            {
                id: 2,
                fImg: "../images/icon2.png",
                fTitle: "Components",
                fText: "Build encapsulated components that manage their state",
            },
            {
                id: 3,
                fImg: "../images/icon3.png",
                fTitle: "Single-Way",
                fText: "A set of inmutable values are passed to the components",
            },
            {
                id: 4,
                fImg: "../images/icon4.png",
                fTitle: "JSX",
                fText: "Statically-typed desinged tu run on modern browsers",
            }
        ]
    }

    render() {

        return (
            <div className="App">
                <nav>
                    <img src="../images/ironhack-logo.svg"></img>
                    <img src="../images/menu-top.svg"></img>
                </nav>

                <div>
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn a Frontend Framework from scratch,to become a Ninka Developer</p>
                    <button>Awesome!</button>
                </div>

                <div>
                    {this.features.map(feature =>
                        <Feature key={feature.id} fTitle={feature.fTitle}
                            fImg={feature.fImg}

                            fText={feature.fText} />
                    )}
                </div>
            </div>
        );
    }
}

