import React, { Component } from "react";

import "./App.css";

// a component is a CLASS so that you can display it in other files
class App extends Component {
  // every component class needs a "render()" method
  // (determines the component's content)
  render(){
    // return the HTML of this component in "render()"
    // (use parenthesis when returning multiple lines of HTML)
    return (
      // Use "className" instead of "class" for styling
      
      <div className="app">

        <div className="homepage">

          <nav>
            <img src="../images/ironhack-logo.svg" alt=""/>
            <img src="../images/menu-top.svg" alt=""/>
          </nav>

          <div className="content">

            <div className="text">
              <h1>Say hello to ReactJS</h1>
              <h2>You will learn a Frontend framework from scratch, to became an Ninka Developer</h2>
              <button class="awesome">Awesome!</button>
            </div>

            <div className="icons-background">
              <div className="left-icons-images">
                <img src="../images/react-logo.svg" alt="" class="big-icon" />
                <img src="../images/react-logo.svg" alt="" class="medium-icon" />
                <img src="../images/react-logo.svg" alt="" class="medium-icon" />
              </div>
              <div className="right-icons-images">
                <img src="../images/react-logo.svg" alt="" class="small-icon" />
                <img src="../images/react-logo.svg" alt="" class="small-icon" />
                <img src="../images/react-logo.svg" alt="" class="small-icon" />
              </div>
            </div>

          </div>

        </div>

        <div className="second">

        <div className="item">
          <img src="../images/icon1.png" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="item">
          <img src="../images/icon2.png" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="item">
          <img src="../images/icon3.png" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="item">
          <img src="../images/icon4.png" />
          <h3>JSX</h3>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>

        </div>

      </div>

    );
  }
}

// export your component CLASS so that you can display it from other files
export default App;
