import React from "react";

export default function Image({ filepath, text, idName }) {
  return <img className="img" src={filepath} alt={text} />;
}
