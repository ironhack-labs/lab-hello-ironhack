import React, { Component } from "react";
import './App.css';

class App extends Component {
    render() {
        return(
            <div className='App'>
                
                <header>
                    <img alt="logo"src='images/ironhack-logo.svg'/>
                    <img alt="menu" src='images/menu-top.svg'/>
                </header>
                <div className="body">
                    <h1>Say Hello to ReactJS</h1>
                    <br/>  
                    <p>you will learn afrontend framework from sctrabde djevhjd djhedhj</p>
                    <button>Awesome!</button>
                </div>
                <div className="loguitos">
                    <div>
                        <img alt="icon1" src='images/icon1.png'/>
                        <h3>Declarative</h3>
                        <p>shkdhjkdn jkfdghjkdgn fjghjdkgnlfd</p>
                    </div>
                    <div>
                        <img alt="icon2" src='images/icon2.png'/>
                        <h3>Declarative</h3>
                        <p>shabd fjkjk fjkdhjkdn jkfdghgnlfd</p>
                    </div>
                    <div>
                        <img alt="icon3" src='images/icon3.png'/>
                        <h3>Declarative</h3>
                        <p>shabd fjkjk fjkdhjkdn jkn fjghjdkgnlfd</p>
                    </div>
                    <div>
                        <img alt="icon4" src='images/icon4.png'/>
                        <h3>Declarative</h3>
                        <p>shabd fjkjk fjkdhjkdn jkfdjghjdkgnlfd</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;