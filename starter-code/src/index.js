import React from "react";
import ReactDom from "react-dom";

import "./style.css";

const ironhackLogoUrl = "./images/ironhack-logo.svg";
const reactLogoUrl = "./images/react-logo.svg";

const page = (
  <div>
    <header className="header">
      <div className="header-content">
        <img src={ironhackLogoUrl} width="8%" />
        <div>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn a Frontend <br /> framework from scratch, to <br />{" "}
            become an Ninka Developer
          </p>
        </div>
        <div className="white-box">
          <span>Awesome!</span>
        </div>
      </div>
      <img src={reactLogoUrl} alt="React-logo" />
    </header>
    <div className="article-container">
      <article>
        <img src="./images/icon1.png" alt="" />
        <div className="text-box">
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs</p>
        </div>
      </article>
      <article>
        <img src="./images/icon2.png" alt="" />
        <div className="text-box">
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
      </article>
      <article>
        <img src="./images/icon3.png" alt="" />
        <div className="text-box">
          <h2>Single-Way</h2>
          <p>A set of immutalbe values are passed to the component´s</p>
        </div>
      </article>
      <article>
        <img src="./images/icon4.png" alt="" />
        <div className="text-box">
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </article>
    </div>
  </div>
);

ReactDom.render(page, document.getElementById("root"));

// const name= "John Doe"

// const imgUrl = "https://www.washingtonpost.com/resizer/kPkFQsQjvSIjfXG-mFXDEpxq6-4=/767x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg"

// const myStyle = {
//     color:"blue", backgroundColor: "gray"
// }

// const greeting =
// <div>
//     <h1 className="heading">Hello World {name}!</h1>
//     <p style={myStyle}>This is a random number: {Math.random()}</p>
//     <img src= {imgUrl} height="200px"></img>
// </div>

// // 1. parameter: what we want to display 2. parameter: where we want to display
// ReactDOM.render(greeting, document.getElementById("root"));
