import React from "react";
import ReactDOM from "react-dom";

const navbar = {
  display: "flex",
  justifyContent: "space-between",
};

const main = {
  backgroundColor: "rgb(31,36,54)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px 50px",
  height: 600,
};

const title = {
  color: "white",
  fontSize: 70,
  margin: 0,
};

const subTitle = {
  color: "white",
  fontSize: 24,
};

const button = {
  width: 190,
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 50,
  fontSize: 20,
  marginBottom: 50,
};

const body = {
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  padding: "100px 60px",
  justifyContent: "space-between",
};

const details = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const image = {
  width: 150,
};
const titlePrompt = {
  fontSize: 20,
  fontWeight: 700,
};

const App = () => {
  return (
    <div id='container'>
      <main style={main}>
        <nav style={navbar}>
          <img src='../images/ironhack-logo.svg' />
          <img src='../images/menu-top.svg' />
        </nav>
        <div>
          <h1 style={title}>
            Say hello to <br /> ReactJS
          </h1>
          <div style={subTitle}>
            You will learn Frontend <br />
            framework from scracht, to <br />
            become a Ninja Developer.
          </div>
        </div>
        <div style={button}>Awesome!</div>
      </main>

      <main style={body}>
        <div style={details}>
          <img style={image} src='../images/icon1.png' />
          <span style={titlePrompt}>Declarative</span>
          <span>React makes it painless to create interactive UIs</span>
        </div>
        <div style={details}>
          <img style={image} src='../images/icon2.png' />
          <span style={titlePrompt}>Components</span>
          <span>Build encapsulated components that manage their state</span>
        </div>
        <div style={details}>
          <img style={image} src='../images/icon3.png' />
          <span style={titlePrompt}>Single-way</span>
          <span>A set of immutable values are passed to the components</span>
        </div>
        <div style={details}>
          <img style={image} src='../images/icon4.png' />
          <span style={titlePrompt}>JSX</span>
          <span>Statically-typed, designed to run on modern browsers</span>
        </div>
      </main>
    </div>
  );
};

export default App;
