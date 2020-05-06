import React from "react";
function Button(props) {
  const classColor = "btn btn-" + props.color;
  return (
    <a href={props.link} className={classColor} role="button">
      {props.text}
    </a>
  );
}
export default Button;
