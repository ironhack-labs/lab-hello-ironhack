import React from "react";
import "./ProductGrid.css";
import Product from "./Product";

function ProductGrid() {
  return (
    <div class="product-grid">
     <Product title="Declarative" img="/images/icon1.png" text="React makes it painless to create interactive Uls."></Product>
     <Product title="Components"  img="/images/icon2.png" text="Buil encapsulated components that mange their state."></Product>
     <Product title="Single-Way"  img="/images/icon3.png" text="A set of inmutable values are passed to the component's."></Product>
     <Product title="JSX"  img="/images/icon4.png" text="Statically-typed, designed to run on modern browsers."></Product>
    </div>
  );
}

export default ProductGrid;