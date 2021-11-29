import React from "react";

function Button(props) {
  return (
    <a href="#" className={props.CSSclass}>
      {props.text}
    </a>
  );
}

export default Button;
