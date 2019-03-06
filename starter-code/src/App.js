import React, { Component } from "react";
import "./App.css";
import Columns from "./Columns";
import Nav from "./Nav";

class App extends Component {

  state = {
    img:"/images/ironhack-logo.svg"
  }
  render() {
    return (
      <div className="theWholeShabang">
        <div>
          <Nav imageprop={this.state.img}/>
        </div>

        <div className="App">
          <div className="mainContent container">
            <h1> Say hello to ReactJS </h1>
            <small>
              You will learn a Frontend framework from scratch, to become a Ninka
              Developer.
            </small>
            <br></br>
            <button>Awesome!</button>
          </div>

          <div id="react">
            <img src="/images/react-logo.svg" />
            <img src="/images/react-logo.svg" />
            <img src="/images/react-logo.svg" />
          </div>
        </div>

        <div >
          <Columns />
        </div>
      </div>
    );
  }
}

export default App;
