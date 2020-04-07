import React, { Component } from "react";

class Bottom extends Component {
  render() {
    return <div class="bottom">
			<div class="bot-box">
    	<img class='icon' src="images/icon1.png" alt="" ></img>
      <h2>Declarative</h2>
      <p>React makes it painless to create interactive UIs.</p>
			</div>
			<div class="bot-box">
    	<img class='icon' src="images/icon1.png" alt="" ></img>
      <h2>Components</h2>
      <p>Build encapsulated components that manage their state.</p>
			</div>
			<div class="bot-box">
    	<img class='icon' src="images/icon1.png" alt="" ></img>
      <h2>Single-Way</h2>
      <p>A set of immutable values are passed to the component's.</p>
			</div>
			<div class="bot-box">
    	<img class='icon' src="images/icon1.png" alt="" ></img>
      <h2>JSX</h2>
      <p>Statically-typed designed to run on modern browsers.</p>
			</div>
    </div>
    
  }
}

export default Bottom;