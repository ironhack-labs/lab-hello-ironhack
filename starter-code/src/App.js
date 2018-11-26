import React, { Component } from 'react';
import './App.css';
import Bloco from "./bloco";

class App extends Component {
  state = {
    componenteA: {
      titleName:"Declarative",
      content: "React makes it painless to create interactive UIs.",
      image: "images/icon1.png"
    },
    componenteB: {
      titleName:"Components",
      content: "Build encapsulated components that manage their state.",
      image: "images/icon2.png"
    },
    componenteC: {
      titleName:"Single-Way",
      content: "A set of immutable values are passed to the component's.",
      image: "images/icon3.png"
    },
    componenteD: {
      titleName:"JSX",
      content: "Statically-typed, designed to run on modern browsers.",
      image: "images/icon4.png"
    }
  };

  render() {
    return (
      <div>
        <div className="App">
          <div className="header">
            <h1>Say hello to ReactJs</h1>
          </div>
          <div>
            <p>You will learn a Frontend framework from scratch, to became an Ninka Developer.</p>
          </div>
          <div>
            <button>Awesome!</button>
          </div>
        </div>  
        <Bloco
        image={this.state.componenteA.image}
        titleName={this.state.componenteA.titleName}
        content={this.state.componenteA.content}
        />
        <Bloco
        image={this.state.componenteB.image}
        titleName={this.state.componenteB.titleName}
        content={this.state.componenteB.content}
        />
        <Bloco
        image={this.state.componenteC.image}
        titleName={this.state.componenteC.titleName}
        content={this.state.componenteC.content}
        />
        <Bloco
        image={this.state.componenteD.image}
        titleName={this.state.componenteD.titleName}
        content={this.state.componenteD.content}
        />
      </div>
    );
  }
}

export default App;
