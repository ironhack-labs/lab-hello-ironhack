import React, { Component } from "react";
import Item from "./Item";
import './List.css'

class List extends Component {
  render() {
    return (
      <div className="listContainer">
        <Item
          image="images/icon1.png"
          title="Declarative"
          description="React makes it painless to create declaratives UI´s"
        />
        <Item
          image="images/icon2.png"
          title="Components"
          description="Build encapsulated components that manage their states"
        />
        <Item
          image="images/icon3.png"
          title="Sigle-Way"
          description="A set of inmutable values are passed to the component´s"
        />
        <Item
          image="images/icon4.png"
          title="JSX"
          description="Statically-typed, designed to run on modern browsers"
        />
      </div>
    );
  }
}

export default List;
