
import React, { Component } from "react";
import "./App.css";

// https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
// https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js
// const logo = require('ironhack-logo.svg')
// import ironhack-logo from '../public/images/ironhack-logo.svg';
class App extends Component {
    render () {
        return (
            <div className="App"> 
               
                <div className="dark-bkg">

                        <div className="say-hello">
                            <img src={'/images/ironhack-logo.svg'} width='30' height='30' />
                            
                            <div>
                                <h1>Say hello to ReactJS</h1>
                                <h3>You will learn a Frontend framework from scratch, to 
                                become a Ninja Developer</h3>
                            </div>
                            

                            <button>Awesome!</button>
                        </div>

                        <div className="react-logos">
                           
                            <div className="left">
                                <img src={'/images/react-logo.svg'} width='200' height='200' className="img-react-logo big" />
                                <img src={'/images/react-logo.svg'} width='150' height='150' className="img-react-logo medium-1" />
                                <img src={'/images/react-logo.svg'} width='150' height='150' className="img-react-logo medium-2" />
                            </div>
                            <div className="right">
                                <img src={'/images/react-logo.svg'} width='100' height='100' className="img-react-logo small" />
                                <img src={'/images/react-logo.svg'} width='100' height='100' className="img-react-logo small" />
                                <img src={'/images/react-logo.svg'} width='100' height='100' className="img-react-logo small" />     
                            </div>
                            
                        </div> 
                      
                </div>


                <div className="light-bkg">

                    <div className="card">
                        <img src={'/images/icon1.png'} width='200' height='200' className="" />    
                        <h2>Declarative</h2>
                        <h4>React makes ... </h4>
                    </div>
                    <div className="card">
                    <img src={'/images/icon2.png'} width='200' height='200' className="" />    
                        <h2>Components</h2>
                        <h4>Build encapsulated ... </h4>
                    </div>
                    <div className="card">
                        <img src={'/images/icon3.png'} width='200' height='200' className="" />      
                        <h2>Single-Way</h2>
                        <h4>A set of immutable ...</h4>
                    </div>
                    <div className="card">
                        <img src={'/images/icon4.png'} width='200' height='200' className="" />    
                        <h2>JSX</h2>
                        <h4>Statically-typed, ...</h4>
                    </div>

                </div>
               
            </div>
        )
    }
}

export default App; 
