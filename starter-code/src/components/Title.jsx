import React from "react";

export default function Title({ title, children }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{children}</h2>
    </div>
  );
}
