import React, { Component } from 'react';
import '../public/styles/styles.css'
class App extends Component{
    render(){
        return (
            <div>
            <div id="top">
            <header>
                <img src="../images/ironhack-logo.svg" alt="ironhack"/>
                <img src="../images/menu-top.svg" alt="hamburguesa" />
            </header>

            <div className="contenido">
                <h1>Say Hello to ReactJS</h1>
                <p>You will learn a FrontEnd framework from scratch, to become a ninja developer</p>
                <span>Awesome!</span>
            </div>
            <div className="logos">
                <img src="../images/react-logo.svg"/>
                <img width="60px" src="../images/react-logo.svg"/>
                <img width="200px" src="../images/react-logo.svg"/>

            </div>
            </div>
            <div id="bottom">
                <div class="card">
                <img src="../images/icon1.png"/>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs</p> 
                </div>
                <div class="card">
                <img src="../images/icon2.png"/>
                <h3>Components</h3>
                <p>React makes it painless to create interactive UIs</p> 
                </div>
                <div class="card">
                <img src="../images/icon3.png"/>
                <h3>Single way</h3>
                <p>React makes it painless to create interactive UIs</p> 
                </div>
                <div class="card">
                <img src="../images/icon4.png"/>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs</p> 
                </div>


            </div>
            </div>
        )
    }
}

export default App;
