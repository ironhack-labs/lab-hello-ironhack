import React from "react";

// TODO Images React around Header
// * Use props to access 4 properties: Position, top, right, transform-scale

function ReactLogo(props) {
  return (
    // Creating and styling each component by separated, this time inline style to access with props.

    <img
      alt="semi-transparent React logo"
      src="./images/react-logo.svg"
      style={{
        position: "absolute",
        filter:
          "invert(90%) sepia(50%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)",
        top: props.top,
        right: props.right,
        transform: `scale(${props.scale})`,
      }}
    />
  );
}

export default ReactLogo;
