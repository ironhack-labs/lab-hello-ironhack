import React from "react";
import "./ProductGrid.css";
import Product from "./Product";

function ProductGrid() {
  return (
    <div className="product-grid">
      <Product
        img="../images/icon1.png"
        title="Declarative"
        description="React makes it painless to create interactive UIs."
      ></Product>
      <Product
        img="../images/icon2.png"
        title="Components"
        description="Build encapsulated components that manage ther state."
      ></Product>
      <Product
        img="../images/icon3.png"
        title="Single-Way"
        description="A set of immutable values are passed to the component's."
      ></Product>
      <Product
        img="../images/icon4.png"
        title="JSX"
        description="Statically-typed, designed to run on modern browsers."
      ></Product>
    </div>
  );
}

export default ProductGrid;
