import React from "react";

function Footer(props) {
  return (
    <div>
      <img src={props.image} />
      <div>
        <title>{props.title}</title>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Footer;
