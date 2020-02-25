import React, {Component} from "react";
import "./App.css";

class App extends Component{
    render(){
        return(
        <div>
            <div className="main">
                <nav className="navBar">
                    <img src="./images/ironhack-logo.svg"></img>
                    <img src="./images/menu-top.svg"></img>
                </nav>
                <div className="flexText">
                    <div className="text1">
                        <h1>Say hello to ReactJS</h1>
                        <p>You will learn a Frontend framework from scratch, to become an Ninja Developer</p>
                        <a href="#">Awesome!</a>
                    </div>
                    <div className="imgReact">
                        <img src="./images/react-logo.svg" id="third"></img>
                        <img src="./images/react-logo.svg" id="second"></img>
                    </div>
                </div>
            </div>

            <div id="description">
                <div>
                    <img src="./images/icon1.png"></img>
                       <h2>Declarative</h2> 
                    <p>
                        React makes it painless to create interactive UIs.
                    </p>
                </div>
                <div>
                    <img src="./images/icon2.png"></img>
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state</p>
                </div>
                <div>
                    <img src="./images/icon3.png"></img>
                    <h2>Single Way</h2>
                    <p>A set of immutable values are passed to the components</p>
                </div>
                <div>
                    <img src="./images/icon4.png"></img>
                    <h2>JSX</h2>
                    <p>Staticly-typed disigned to run on modern browsers</p>
                </div>
                

            </div>
        </div>
        );
    }
}
export default App;