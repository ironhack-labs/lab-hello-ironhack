// import ReactDOM from "react-dom";
import React from 'react';

const style = {
  boxStyle: {
    width: '18%',
    height: '200px',
  },
  heading: {
    fontSize: '30px',
    fontWeight: '400',
  },
};
const Box = props => (
  <div style={style.boxStyle}>
    <img src="/images/rating.svg" alt="" />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
);
export default Box;
