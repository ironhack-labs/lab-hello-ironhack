import React from "react";
function Hero(props) {
  return (
    <div className="hero">
      <h1 className="hero-title">{props.title}</h1>
      <h2 className="hero-desc">{props.description}</h2>
    </div>
  );
}
export default Hero;
