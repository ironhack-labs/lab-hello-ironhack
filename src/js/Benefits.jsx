import ReactDOM from "react-dom";
import React from "react";
import Box from "./Box";

const benefits = {
  display: "flex",
  width: "75%",
  height: "90vh",
  alignItems: "center",
  margin: "0 auto",
  justifyContent: "space-between"
};

const Benefits = props => {
  const text = [
    {
      title: "Declarative",
      description: "React makes it painless to create interactive UI."
    },
    {
      title: "Components",
      description: "Build encapsulated components that manage their state."
    },
    {
      title: "Single-Way",
      description: "A set of immutable values are passedto to the components."
    },
    {
      title: "JSX",
      description: "Statically-typed, designed to run on modern browsers."
    }
  ];

  return (
    <div style={benefits}>
      {text.map(el => {
        return <Box title={el.title} description={el.description} />;
      })}
    </div>
  );
};

export default Benefits;
