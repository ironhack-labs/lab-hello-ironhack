import React from "react";

function Footer(props) {
  return (
    <div>
      <img src={props.image} />
      <div>
        <h2>{props.subtitle}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Footer;
