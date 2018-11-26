import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Section from "./section.js";
import Nav from "./Nav.js";

ReactDOM.render(
  <section>
    <Nav />
    <Header />
    <Section />
  </section>,
  document.getElementById("root")
);
