import React, { Component } from "react";
import Icon from './Icon'
import AboveFold from './AboveFold'

class App extends Component {
  render() {
    const icon1 = {
      name: "Declarative",
      description: "React makes it painless to create interactive UIs.",
      img: "../images/icon1.png"
    };
    const icon2 = {
      name: "Components",
      description: "Build encapsulated components that manage their state",
      img: "../images/icon2.png"
    };

    const icon3 = {
      name: "Single-Way",
      description: "A set of immutable values are passed to the components",
      img: "../images/icon3.png"
    };

    const icon4 = {
      name: "JSX",
      description: "Statically-typed, designed to run on modern browsers",
      img: "../images/icon4.png"
    };

    return (
      <div>        
        <AboveFold />
        <section className='container'>
        <Icon icon={icon1}/>
        <Icon icon={icon2}/>
        <Icon icon={icon3}/>
        <Icon icon={icon4}/>
        </section>
      </div>
    );
  }
}

export default App;