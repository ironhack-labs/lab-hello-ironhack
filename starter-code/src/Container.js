import React from 'react';
import Item from "./Item";

class Container extends React.Component {
  render() {
    return (
      <div className="item-container">
        <Item img="../images/icon1.png" title="Declarative" description="React makes it painless to create interactive UIs."/>
        <Item img="../images/icon2.png" title="Components" description="Build encapsulated components that manage their state."/>
        <Item img="../images/icon3.png" title="Single-Way" description="A set of immutable values are passed to the component's."/>
        <Item img="../images/icon4.png" title="JSX" description="Statically-type, design to run on modern browsers."/>
      </div>
    )
  }
}

export default Container;