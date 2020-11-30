import React from "react";
import './styles/App.css'


const App = () => {
    return (
        <div className="App">

            <div className="section1">
                <div className="nav">
                    <img src='/images/ironhack-logo.svg' alt="ironhackLogo"/>
                    <img src='/images/menu-top.svg' alt="menu"/>
                </div>
                <div className="header">
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn how to use <br/> the most popular frontend library, <br/> and become a super Ninja developer</p>
                    <button>Awesome!</button>
                </div>
            </div>

            <div className="section2">
            
                <div>
                    <img src='/images/icon1.png' alt="icon1"/>
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                
                <div>
                    <img src='/images/icon2.png' alt="icon2"/>
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state.</p>
                </div>    

                <div>
                    <img src='/images/icon3.png' alt="icon3"/>
                    <h2>Single-Way</h2>
                    <p>A set of immutable values are passed to the component's.</p> 
                </div>

                <div>
                    <img src='/images/icon4.png' alt="icon4"/>
                    <h2>JSX</h2>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
               

                

            </div>
    
        </div>
    )
}
export default App;