import React from "react";
import "./title.styles.css";

const Title = ({ text }) => {
  return (
    <div className="title">
      <h2>{text}</h2>
    </div>
  );
};

export default Title;
