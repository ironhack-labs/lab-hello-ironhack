import React from "react";

export default function Card(props) {
  return (
    <div>
      <img src={props.src} />
      <h3>{props.title}</h3>
      <p>React makes it painless to create interactive UIs</p>
    </div>
  );
}
