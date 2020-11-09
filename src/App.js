import React, {Component} from "react";
import "./App.css";


class App extends Component{
    render(){
        return (<div>
        
            <nav class="nav" >
                <img src="../images/ironhack-logo.svg"/>
                <img src="../images/menu-top.svg"/>
            </nav>
            <section class="sectionbackground">
            <div>
                <h1>Say hello to <br/>ReactJS</h1>
                <p>You will leart how to use <br/> the most popular frontend library, <br/> and become a super Ninja developer.</p>
                <button class="button">Awesome!</button>
            </div>
            </section>
            <div class="divsection">
                <div>
                    <img src="../images/icon1.png"/>
                    <h3> Declarative </h3>
                    <span> React makes it painless to create interactive UIs.</span>
                </div>
                <div>
                    <img src="../images/icon2.png"/>
                    <h3> Components </h3>
                    <span> Build encapsulated components that manage their state.</span>
                </div>
                <div>
                    <img src="../images/icon3.png"/>
                    <h3> Single-Way </h3>
                    <span> A set of immutable values are passed to the component's</span>
                </div>
                <div>
                    <img src="../images/icon4.png"/>
                    <h3> JSX </h3>
                    <span> Statically-typed, designed to run on modern browsers.</span>
                </div>
            </div>
           
        </div>);
    }
}
export default App;