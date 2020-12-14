import React, { Component } from "react";
import "./App.css";

//import of images is not working for this LAB
//when you move the images to another folder they won't be found  
//import icon1 from "./img/icon1.png";

import Navbar from "./Navbar";

class App extends Component {
    render() {

        let h1 = <h1>Say hello to ReactJS</h1>
        let paragraph = <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>

        return (
            // like the hbs template in backend
            <div className="Main">
                <div className="Background">
                    <div className="Middle">

                        {/* <img src="images/react-logo.svg" /> */}

                        <Navbar />

                        <div className="InsideMiddle">
                            <div className="MiddleLeft">
                                {h1}
                                {paragraph}
                                <button className="SubmitButton" type="submit">Awesome!</button>
                            </div>
                            <img className="Logo FirstLogo" src="images/react-logo.svg" />
                            <img className="Logo SecondLogo" src="images/react-logo.svg" />
                        </div>
                    </div>
                </div>

                <div className="Bottom">
                    <div className="IconBox">
                        <img className="Icon" src="images/icon1.png" />
                        <h3>Declarative</h3>
                        <p>React makes it painless to create interactiveUIs.</p>
                    </div>
                    <div className="IconBox">
                        <img className="Icon" src="images/icon2.png" />
                        <h3>Components</h3>
                        <p>Build encapsulated omponents hat manage their state.</p>
                    </div>
                    <div className="IconBox">
                        <img className="Icon" src="images/icon3.png" />
                        <h3>Single-Way</h3>
                        <p>A set of immutable values are passed to the components.</p>
                    </div>
                    <div className="IconBox">
                        <img className="Icon" src="images/icon4.png" />
                        <h3>JSX</h3>
                        <p>Statically-typed, designed to to run on modern browsers.</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;