import React from "react";
import "./Product.css";

function Product(props) {
    return <div className="element">
                <img src={props.image}/>
                <h3> {props.name}</h3>
                <p> {props.description}</p>
    </div>
}

export default Product;