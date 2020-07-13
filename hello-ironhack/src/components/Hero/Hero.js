import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <nav className="navbar">
        <img src="../../../images/ironhack-logo.svg" />
        <img src="../../../images/menu-top.svg" />
      </nav>
      <article class="main-title">
        <h1 className="white">Say hello to ReactJS</h1>
        <p className="white">
          You will learn a Frontend framework from scratch, to become an Ninka
          developer
        </p>
        <a className="button">Awesome!</a>
      </article>
    </section>
  );
};
export default Hero;
