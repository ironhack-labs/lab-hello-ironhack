import React from "react";
import logo from "./images/ironhack-logo.svg";
import sideMenu from "./images/menu-top.svg";
import "./app.css";
import img1 from "./images/icon1.png";
import img2 from "./images/icon2.png";
import img3 from "./images/icon3.png";
import img4 from "./images/icon4.png";

function App() {
  return (
    <div className="app">
      <div>
        <ul>
          <li>
            <img src={logo} alt="Ironhack logo" />
          </li>
          <li>
            <img src={sideMenu} alt="side Menu" />
          </li>
        </ul>
      </div>

      <div className="content">
        <h1>
          {" "}
          Say hello to <br /> ReactJS
        </h1>
        <h4>
          You will learn a Frontend <br />
          framework from scratch to <br />
          become an Ninja Developer
        </h4>
        <button> Awesome! </button>
      </div>

      <div className="images">
        <ul>
          <li>
            <img src={img1} alt="img1" />
            <div className="textImages">
              <h2>Declarative</h2>
              <p>
                React makes it <br />
                painless to create <br />
                interactive Uls.
              </p>
            </div>
          </li>
          <li>
            <img src={img2} alt="img2" />
            <div className="textImages">
              <h2>Components</h2>
              <p>
                Build encapsulated <br />
                components that <br />
                manage their state.
              </p>
            </div>
          </li>
          <li>
            <img src={img3} alt="img3" />
            <div className="textImages">
              <h2>Single-Way</h2>
              <p>
                Aset of inmutable <br />
                values are passed to <br />
                the component´s
              </p>
            </div>
          </li>
          <li>
            <img src={img4} alt="img4" />
            <div className="textImages">
              <h2>JSX</h2>
              <p>
                Statically-typed,
                <br />
                designed to run on <br />
                modern browsers{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
