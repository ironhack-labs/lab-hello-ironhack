import React from "react";
import "./Showcase.css";

function Showcase(props) {
  return (
    <div className='showcase'>
      <img src={props.url} alt='' />
      <h1>{props.title}</h1>
      <p>{props.article}</p>
    </div>
  );
}

export default Showcase;
