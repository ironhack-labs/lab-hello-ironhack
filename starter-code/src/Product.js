
import React from "react";
import "./Product.css";

function Product(props) {
  // var price = Math.round(Math.random() * 100)
 

  return (
    <div className="product">
    
      
      <img src={props.img} alt="" width="100" />
      
      <h1>{props.title}</h1>

      <p>{props.text}</p>
    </div>
  );
}

export default Product;
