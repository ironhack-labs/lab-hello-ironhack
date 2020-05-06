import React from "react";
import SingleCard from "./SingleCard";

function Cards(props) {
  return (
    <div className="cards">
      <SingleCard
        icon="/images/0.jpg"
        title="Declarative"
        desc="React makes it painless to create interactive UIs."
      />
      <SingleCard
        icon="/images/0.jpg"
        title="Components"
        desc="Build encapsulated components that manage their state."
      />
      <SingleCard
        icon="/images/0.jpg"
        title="Single-Way"
        desc="A set of immutable values are passed to the components."
      />
      <SingleCard
        icon="/images/0.jpg"
        title="JSX"
        desc="Statically-typed, designed to run on modern browser."
      />
    </div>
  );
}
export default Cards;
