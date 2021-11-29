import React from "react";
import "./App.css";
import Button from "./Components/Button";
import NavBar from "./Components/NavBar";
import InfoCard from "./Components/InfoCard";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <NavBar />
        <h1>Say hello to React JS</h1>
        <p>You will learn how to use the most popular frontend</p>
        <Button text="Awesome!" CSSclass="btn" />
      </div>
      <div className="Cards">
        <InfoCard
          img={icon1}
          title="Declarative"
          text="React makes it painless to create interactive UIs.1"
        />
        <InfoCard
          img={icon2}
          title="Components"
          text="React makes it painless to create interactive UIs.2"
        />
        <InfoCard
          img={icon3}
          title="Single-Way"
          text="React makes it painless to create interactive UIs.3"
        />
        <InfoCard
          img={icon4}
          title="JSX"
          text="React makes it painless to create interactive UIs.4"
        />
      </div>
    </React.Fragment>
  );
}

export default App;
