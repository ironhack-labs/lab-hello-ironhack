import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {

    const featureArr = [
      { icon: '/images/icon1.png', heading: 'Declaractive', text: 'React makes it painless to create interactive UIs' },
      { icon: '/images/icon2.png', heading: 'Components', text: 'Build encapsulated components that manage their state' },
      { icon: '/images/icon3.png', heading: 'Single-Way', text: 'A set of immutable values are passed to the components' },
      { icon: '/images/icon4.png', heading: 'JSX', text: 'Statically-typed, designed to run on modern browsers' },
    ]

    const featureELements = featureArr.map(data => {
      return <div className="hightligt-items">
        <img src={data.icon} />
        <h4>{data.heading}</h4>
        <p>{data.text}</p>
      </div>
    })

    const header = (
      <div className="top-box">
        <div className="header">
          <img src='/images/ironhack-logo.svg' />
          <img src='/images/menu-top.svg' />
        </div>
        <div class="header-content">
          <div class="header-text">
            <div className="headline">
              <h1>Say Hello to ReactJS</h1>
            </div>
            <div className="sub-headline">
              <p>You will learn a Frontend framework from scratch, to become a Ninka Developer</p>
            </div>
            <div className="button">
              <button>Awesome</button>
            </div>
          </div>
          <img class="reactimg-1" src="/images/react-logo.svg" />
          <img class="reactimg-2" src="/images/react-logo.svg" />
          <img class="reactimg-3 " src="/images/react-logo.svg" />
        </div>
      </div>
    )

    return (
      <div className="App">
        {header}
        <div className="highlights">
          {featureELements}
        </div>
      </div>
    )
  }
}

export default App;

