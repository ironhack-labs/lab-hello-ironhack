import React from "react";
import "./Section.css";
const Section = (props) => {
  return (
    <section className="contentBox">
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
      <button>{props.button_title}</button>
    </section>
  );
};

export default Section;
