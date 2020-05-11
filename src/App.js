import React, { Component } from 'react'
//import Profile from "./Profile";
import "./App.css";
import MyComponent from "./MyComponent";

export class App extends Component {

    state = {};

    render() {
        return (
            <div className="App">  
                 <nav>
                    <div>
                        <img src="images/menu-top.svg" alt="nav-image-menu"/>
                    </div>
                    <div>
                        <img src="/images/ironhack-logo.svg" alt="nav-image"/>
                    </div>
                </nav>

                    <h1>Say hello to reactJS</h1>
                    <h3>lorem ipsum</h3>
                    <button>Awesome</button>

                <div className="component-container">

                {/* < MyComponent /> {/* {description: "1st descrp"} */}
                {/* component goes here     */}
                <MyComponent desc="components" imag="icon1.png" />    
                <MyComponent desc="declarative" imag="icon2.png" />  
                <MyComponent desc="single-way" imag="icon3.png" />  
                <MyComponent desc="jsx" imag="icon4.png" />  
                </div>
            </div>
        )
    }
}

export default App
