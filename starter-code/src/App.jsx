import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import InfoBlock from "./components/Infoblock.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top body">
          <NavBar />
          <Header />
        </div>
        <div className="main">
          <InfoBlock
            image="/images/icon1.png"
            title="Declarative"
            description="React makes it painless to create interactive UIs."
          />
          <InfoBlock
            image="/images/icon2.png"
            title="Components"
            description="Build encapsulated components that manage their state."
          />
          <InfoBlock
            image="/images/icon3.png"
            title="Single-Way"
            description="A set of immutable values are passed to the components."
          />
          <InfoBlock
            image="/images/icon4.png"
            title="JSX"
            description="Statically-typed, designed to run on modern browsers."
          />
        </div>
      </div>
    );
  }
}

{
  /* <div class="info-card">
<img src={this.props.image} />
<h2>{this.props.title}</h2>
<p>{this.props.description}</p>
</div> */
}

// rfc
// rcc

export default App;
