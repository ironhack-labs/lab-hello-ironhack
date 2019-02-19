import React from "react";
import "./ShowProduct.css";
import Product from "./Product";

function ShowProduct(props) {
    return (
        <div className="products">
            <Product name="Declarative" image="images/icon1.png" description="React makes it painless to create interactives UIs."/>
            <Product name="Components" image="images/icon2.png" description="Builds encansulated Components that manage their state."/>
            <Product name="Single way" image="images/icon3.png" description="A set of inmutables values are passed to the component's."/>
            <Product name="JSX" image="images/icon4.png" description="Statically-type designed to run on modern browsers."/>
        </div>
    )
}

export default ShowProduct;