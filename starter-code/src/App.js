import React, { Fragment } from "react";
import "./App.css";
import Info from "./Info.js";

const App = () => {
    return (
      <Fragment>
      <div className="imagebg">
        <nav>
          <img src="/images/ironhack-logo.svg"></img>
          <img src="/images/menu-top.svg"></img>
        </nav>
        <div className="headerTitle">
          <h1>Say hello to <br></br> ReactJS</h1>
          <p>You will learn a Frontend <br></br>frameowork from scratch, to <br></br>became an Ninka developer</p>
          <a href="#">Awesome!</a>
        </div>
      </div>
      <div className="InfoDiv">
        <Info imglink="/images/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs." />
        <Info imglink="/images/icon2.png" title="Components" text="Build encapsulated components that manage ther state." />
        <Info imglink="/images/icon3.png" title="Single-Way" text="A set of Immutable values are passed to the component's." />
        <Info imglink="/images/icon4.png" title="JSX" text="Statically-typed designed to run on modern browsers." />
      </div>
      </Fragment>
    );
}

export default App;