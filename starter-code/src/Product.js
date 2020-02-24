import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="container-img">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Product;
