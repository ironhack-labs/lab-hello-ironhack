import React from "react";

export default function Tagline({ title, baseline }) {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <p>{baseline}</p>
    </React.Fragment>
  );
}
