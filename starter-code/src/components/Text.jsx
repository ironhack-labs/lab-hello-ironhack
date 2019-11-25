import React from "react";

export default function Text({ title, text }) {
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <p>{text}</p>
    </React.Fragment>
  );
}
