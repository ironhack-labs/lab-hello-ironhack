import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div class="footer">
      <div>
      <img src="/images/icon1.png"></img>
      <h2 class="footer-txt">Declarative</h2>
      <p class="footer-txt">React makes it painless to create interactive UIs.</p>
      </div>
      <div>
      <img src="/images/icon2.png"></img>
      <h2 class="footer-txt">Components</h2>
      <p class="footer-txt">Build encapsulated components that manage their state.</p>
      </div>
      <div>
      <img src="/images/icon3.png"></img>
      <h2 class="footer-txt">Single-Way</h2>
      <p class="footer-txt">A set of immutable values are passed to the components.</p>
      </div>
      <div>
      <img src="/images/icon4.png"></img>
      <h2 class="footer-txt">JSX</h2>
      <p class="footer-txt">Statically designed to run on modern browsers.</p>
      </div>
      </div>
      
    );
  }
}

export default Navbar;