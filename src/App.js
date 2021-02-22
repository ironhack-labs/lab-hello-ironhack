import React, { Component } from "react";

const icon1 = "/images/icon1.png";
const icon2 = "/images/icon2.png";
const icon3 = "/images/icon3.png";
const icon4 = "/images/icon4.png";

class App extends Component {
  render() {
    return (
      <div className="main-div">
        <div className="intro">
          <h1> Say Hello to </h1>
          <h1> ReactJS </h1>

          <h4>You will learn to use</h4>
          <h4>the most popular front end library</h4>
          <h4>and become a supernija developer</h4>

          <button>Awesome!</button>
        </div>

        <div id="features">
          <article className="mktg">
            <div>
              <img src={icon1} alt="" width="80px" />
            </div>
            <h3>Declarative </h3>
            <div>React makes it painless to create interactive UIs </div>
          </article>
          <article className="mktg">
            <div>
              <img src={icon2} alt="" width="80px" />
            </div>
            <h3>Componenents </h3>
            <div>Build encapsulated componenents that manages their state</div>
          </article>
          <article className="mktg">
            <div>
              <img src={icon3} alt="" width="80px" />
            </div>
            <h3>Single-Way</h3>
            <div>A set of immaculate values are passed to the component's.</div>
          </article>
          <article className="mktg">
            <div>
              <img src={icon4} alt="" width="80px" />
            </div>
            <h3>JSX</h3>
            <div>Stastically-type designed to run on modern browsers</div>
          </article>
        </div>
      </div>
    );
  }
}

export default App;
