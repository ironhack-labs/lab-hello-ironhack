import React from 'react';
import Card from './cards';
import "./Footer.css"
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';


const footer = () => {
  return (
      <div class="footer">
        <Card image={icon1} title="Declarative" text="React makes it painless to create interactice UIs."/>
        <Card image={icon2} title="Components" text="Build encapsulated components that manage their state."/>
        <Card image={icon3} title="Single-Way" text="A set of immutable values are passed to the component's."/>
        <Card image={icon4} title="JSX" text="Statically-typed, designed to run on modern browsers."/>
      </div>
  );
}

export default footer;