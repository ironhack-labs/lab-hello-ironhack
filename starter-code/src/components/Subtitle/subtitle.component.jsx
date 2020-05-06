import React from "react";
import "./subtitle.styles.css";

const Subtitle = ({ text }) => {
  return (
    <div className="subtitle">
      <h2>{text}</h2>
    </div>
  );
};

export default Subtitle;
