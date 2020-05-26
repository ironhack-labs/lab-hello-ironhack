import React, { Component } from "react";

import "./App.css";

class App extends Component {
    render() {
        const logo = <img src="/images/ironhack-logo.svg"></img>
        return (
         <div className="App">
             <div className="head">
                {logo}
             </div>
            <h1> Say hello to ReactJS </h1>
            <p>You will learn a Frontend <br></br>framework from scratch, to <br></br>become a Ninka Developer.</p>
            <button>Awesome!</button>
          </div>
        );
      }
    }
     
    export default App;