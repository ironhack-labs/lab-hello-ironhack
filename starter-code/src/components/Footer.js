import React, { Component } from 'react';
import Card from './Card';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="App-footer">
        <Card img="../images/icon1.png" header="Declarative" description="React makes it painless to create interactive UIs."/>
        <Card img="../images/icon2.png" header="Components" description="Build encapsulated components that manage their state."/>
        <Card img="../images/icon3.png" header="Single-Way" description="A set of immutable values are passed to the component's."/>
        <Card img="../images/icon4.png" header="JSX" description="Statically-types, designed to run on modern browsers."/>
      </div>
    );
  }
}

export default Footer;