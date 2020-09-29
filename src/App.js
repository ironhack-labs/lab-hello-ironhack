import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Section from "./Section";

const App = () => {
  return (
    <div className="all-body">
      <section className="nav-hero">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <Section></Section>
    </div>
  );
};

export default App;
