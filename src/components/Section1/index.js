import React from "react";
import './style.css'

const Section1 = () => {
  return (
    <section>
      <nav className="navbar">
        <img src="./images/ironhack-logo.svg" alt="" />
        <img src="./images/menu-top.svg" alt="" />
      </nav>
      <div>
        <p>
          Say hello to <br /> ReactJS
        </p>
        <p>
          You will learn how to use <br />
          the most popular frontend library, <br />
          and became a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
    </section>
  );
};

export default Section1;
