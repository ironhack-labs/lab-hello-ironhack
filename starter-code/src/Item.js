import React from "react";
import List from './List'

const Item = props => {
    const {title, image, description} = props

  return (<div className="Item-container">
    <img src={image}></img>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
  )}

export default Item;
