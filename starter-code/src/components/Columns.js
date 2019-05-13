import React from "react";

class Columns extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="column">
          <img class="icon" src="/images/icon1.png" />
          <h2>Declarative</h2>
          <p>React makes it painless to make interactive UI's</p>
        </div>
        <div class="column">
        <img class="icon" src="/images/icon2.png" />
        <h2>Components</h2>
        <p>Build encapsulated components that manager their own state.</p>
        </div>
        <div class="column">
        <img class="icon" src="/images/icon3.png" />
        <h2>Single-way</h2>
        <p>A set of immutabel values are passed to the components</p>
        </div>
        <div class="column">
        <img class="icon" src="/images/icon3.png" />
        <h2>JSX</h2>
        <p>Statically-Typed. Designed to run on modern browsers.</p>
        </div>
      </div>
    );
  }
}

export default Columns