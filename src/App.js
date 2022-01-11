import React from "react";
import "./App.css"

const App = () => {
    return (
        <div id="App">
            <div id="greetings">
                <div id="message">
                    <img src="./images/ironhack-logo.svg" />
                    <h1>Say hello to<br></br>ReactJS</h1>
                    <p>
                        You will learn how to use<br></br>
                        the most popular frontend library,<br></br>
                        and beacome a super Ninja developer.
                    </p>
                    <p><b>Awesome!</b></p>
                </div>
                <div id="imgs">
                    <div id="menu-logo">
                        <img src="./images/menu-top.svg" />
                    </div>
                    <div id="react-imgs">
                        <div>
                            <img src="./images/react-logo.svg" alt="logo 1" />
                            <img src="./images/react-logo.svg" alt="logo 2" />
                            <img src="./images/react-logo.svg" alt="logo 3" />
                        </div>
                        <div id="react-logos">
                            <img src="./images/react-logo.svg" alt="logo 4" />
                            <img src="./images/react-logo.svg" alt="logo 4" />
                            <img src="./images/react-logo.svg" alt="logo 4" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="infos">
                <div>
                    <img src="./images/icon1.png" />
                    <h3><b>Declarative</b></h3>
                    <p>
                        React make is<br></br>
                        painless to create<br></br>
                        interactive UIs.
                    </p>
                </div>
                <div>
                    <img src="./images/icon2.png" />
                    <h3><b>Components</b></h3>
                    <p>
                        Build encapsulated<br></br>
                        components that<br></br>
                        manage their state.
                    </p>
                </div>
                <div>
                    <img src="./images/icon3.png" />
                    <h3><b>Single-Way</b></h3>
                    <p>
                        A set of immutable<br></br>
                        values are passed to<br></br>
                        the component's.
                    </p>
                </div>
                <div>
                    <img src="./images/icon4.png" />
                    <h3><b>JSX</b></h3>
                    <p>
                        Statically-typed,<br></br>
                        designed to run on<br></br>
                        modern browsers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;