import React from "react";

const Title = props => {
  return (
    <>
      <h1>{props.title}</h1>
      <h4>{props.subtitle}</h4>
    </>
  );
};

export default Title;
