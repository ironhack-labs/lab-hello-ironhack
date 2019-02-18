import React from "react";

function Item(props) {
  return  <div className="Item">
    <img src={props.imgUrl} />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
}

export default Item;