import React from "react";

// import "./assets/styles/style.css";

const Hero = () => {
  return (
      <div className="hero">
        <header className="navbar">
          <img src="./images/ironhack-logo.svg" alt="Ironhack logo" className="logo" />
          <img src="./images/menu-top.svg" alt="Menu icon" className="menu" />
        </header>
        <section className="hero-section">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <a href="#">Awesome!</a>
        </section>
      </div>
  );
};

export default Hero;