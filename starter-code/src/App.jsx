import React from "react";
import NavBar from "./components/NavBar";
import Middle from "./components/middle";
import Footer from "./components/footer";
import "./styles/app.css";
const App = () => {
  return (
    <div className="app-content">
      <div className="top-content">
        
          <NavBar></NavBar>
          <Middle></Middle>
      </div>

      <div className="footer-content">
        <Footer
          src="./images/icon1.png"
          title="Declarative"
          txt="React Makes it painless to create interactive UIs"
        ></Footer>
        <Footer
          src="./images/icon2.png"
          title="Components"
          txt="Build encapsulated components that manage their state"
        ></Footer>
        <Footer
          src="./images/icon3.png"
          title="Single-Way"
          txt="A set of immutable values are passed to the components"
        ></Footer>
        <Footer
          src="./images/icon4.png"
          title="JSX"
          txt="Statically-typed, designed to run on modern browsers."
        ></Footer>
      </div>
    </div>
  );
};

export default App;
