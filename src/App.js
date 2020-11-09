import React, { Component } from "react";
import "./App.css";
 
class App extends Component {
  render() {
    return ( <div>
    <div class = "background">
       <nav>
       <img src="../images/ironhack-logo.svg" />
       <img src="../images/menu-top.svg" />
       </nav>

       <section>
            <h1>Say hello to <br></br> ReactJS</h1>
            <h3> You will learn how to use <br/>the most popular frontend library <br/>and become a super Ninja developer.</h3>
            <button>Awesome!</button>
        </section>
</div>
        <div class = "features">
            <div>
            <img src="../images/icon1.png" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
            </div>
            <div>
            <img src="../images/icon2.png" />
            <h3>Components</h3>
            <p>Buid enscapulated components that manage their state</p>
            </div>
            <div>
            <img src="../images/icon3.png" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's</p>
            </div>
            <div>
            <img src="../images/icon4.png" />
            <h3>JSX</h3>
            <p>Statically-typed designed to run on modern browsers</p>
            </div>
        </div>


      </div>

      
    );
  }
}
 
export default App;