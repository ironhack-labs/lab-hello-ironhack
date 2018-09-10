import ReactDOM from "react-dom";
import React from "react";

const style = {
  boxStyle: {
    width: "20%",
    height: "200px"
  },
  heading: {
    fontSize: "30px",
    fontWeight: "400"
  }
};

const Box = props => {
  return (
    <div style={style.boxStyle}>
      <img src={require("../../public/rating.svg")} alt="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Box;
