import React, {Component} from "react";
import "./App.css";

class App extends Component {
    render() {
        return (<div className="App">
            
            <div class="main">
            <div class="images">
                <img class ="logo" src= "/images/ironhack-logo.svg" width="50"/>
                <img class="menu" src="/images/menu-top.svg" width="40" />
            </div>

            <h1> Say hello to ReactJS </h1> 
            <h3> You will learn a Frontend framework from Scratch, to become a ninja Developer </h3>
            <button type="submit">Awesome!</button>
    
       </div>
            
             <div class = "container" >
                <div>
                    <img src = "/images/icon1.png" />
                    <h2> Declarative </h2>
                    
                <p> React makes it painless to create interactive UIs. </p>
                
                 </div>
                <div>
                <img src = "images/icon2.png" />
                <h2> Components </h2>
                <p> Build encapsulated components that manage their state. </p>
                 </div>
                <div>
                    <img src = "images/icon3.png" />
                    <h2> Single - Way </h2>
                    <p> A set of immutable values are passed to the component´ s. </p>
                </div>
                <div>
                    <img src = "images/icon4.png"  />
                    <h2> JSX </h2>
                    <p> Statically - typed, designed to run on modern browsers. </p>
                 </div>             
                 </div>
            
 </div>
        );
    }
}

export default App;