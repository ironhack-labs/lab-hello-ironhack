import React, { Fragment } from "react";

// import "./App.css";

const AppBar = () => (
  <div className="navbar">
    <img className="logo" src="/images/ironhack-logo.svg" alt="logo" />
    <span className="spacer" />
    <img className="menuButton" src="/images/menu-top.svg" alt="menu" />
  </div>
);

export default props => {

    const features = [{
        name: 'Declarative',
        text: 'React makes it painless to create interactive Uis',
        src: '/images/icon1.png'
    }, {
        name: 'Components',
        text: 'Build encapsulated components that manage their state',
        src: '/images/icon2.png'
    }, {
        name: 'Single-Way',
        text: 'A set of immutable values are passed to the components',
        src: '/images/icon3.png'
    }, {
        name: 'JSX',
        text: 'Statically typed, designed to run on modern browsers',
        src: '/images/icon4.png'
    }];


  return (
    <Fragment>
      <AppBar />
      <div className="hero">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn a Frontend framework from scratch, to become a Ninja
          Developer
        </p>
        <button>Awesome!</button>
      </div>
      <div className="features">
        {features.map(({name, text, src}, key) => (
            <div className="feature" key={key}>
                <img src={src} alt={name}/>
                <h3>{name}</h3>
                <p>{text}</p>
            </div>
        ))}
      </div>
    </Fragment>
  );
};
