import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import Panel from "./Panel";
import Showcase from "./Showcase";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='landing'>
          <Nav />
          <Panel />
        </div>
        <div className='jumbotron'>
          <Showcase
            url='images/icon1.png'
            title='Declarative'
            article='React makes it painless to create interactive UIs'
          />
          <Showcase
            url='images/icon2.png'
            title='Components'
            article='Build encapsulated components that manage their state'
          />
          <Showcase
            url='images/icon3.png'
            title='Single Way'
            article='A set of immutable values are passed to the components'
          />
          <Showcase
            url='images/icon4.png'
            title='JSX'
            article='Statycally-typed designed to run on modern browsers'
          />
        </div>
      </div>
    );
  }
}

export default App;
