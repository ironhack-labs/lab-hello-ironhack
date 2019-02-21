// React component

import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">

                <div className="bgd">
                    <div className="imgs-top">
                         <img src="/images/ironhack-logo.svg" alt="icon1"></img>
                         <img src="/images/menu-top.svg" alt="icon1"></img>
                    </div>

                    <div className="right">

                        <div>
                            <h1>Say Hello to ReactJS</h1>
                            <p>You will learn frontend framework from scrathc, to become a Ninja developer! </p>
                            <button className="button">Awesome!</button>
                        </div>

                        <div className="react">
                            
                            <img src="/images/react-logo.svg" alt="icon1"></img>
                             
                            <img src="/images/react-logo.svg" alt="icon1" className="react-logos-md"></img>
                            <img src="/images/react-logo.svg" alt="icon1" className="react-logos-md"></img>
                            
                                <div className="log-sm"> 
                                    <img src="/images/react-logo.svg" alt="icon1" className="react-logos-sm"></img>                               
                                    <img src="/images/react-logo.svg" alt="icon1" className="react-logos-sm"></img>                              
                                    <img src="/images/react-logo.svg" alt="icon1" className="react-logos-sm"></img>
                                </div>
                        </div>

                    </div>

                </div>

                        
                <div className="imgs-bottom">
                
                        <div>
                            <img src="/images/icon1.png" alt="icon1"></img>
                            <h3>Declarative</h3>
                            <p className="txt">React make its painless to create interactive UIs</p>        
                            
                        </div>

                        <div>
                            <img src="/images/icon2.png" alt="icon2"></img>
                            <h3>Componets</h3>
                            <p className="txt">Build encapsulated components that manage their state </p>
                            
                        </div>

                        <div>
                            <img src="/images/icon3.png" alt="icon3"></img>
                            <h3>Single-way</h3>
                            <p className="txt">A set of inmmutable values are passed to the components</p>
                            
                        </div>

                        <div>   
                            <img src="/images/icon4.png" alt="icon4"></img>
                            <h3>JSX</h3>
                            <p className="txt">Statically-typed, designed to rin on modern browsers</p>
                            
                        </div>            
                </div>

            </div>//Closing App div

          
        );
    }
};

export default App;

















