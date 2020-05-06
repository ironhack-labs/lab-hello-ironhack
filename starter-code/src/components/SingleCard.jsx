import React from "react";
function SingleCard(props) {
  return (
    <div>
      <div className="card">
        <img src={props.icon} className="card-img" alt="" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default SingleCard;
