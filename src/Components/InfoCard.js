import React from "react";

function InfoCard(props) {
  return (
    <div>
      <img src={props.img} />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default InfoCard;
