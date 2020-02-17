import React from "react";

export default function Item({ url, title, children }) {
  return (
    <div className="col-sm text-center">
      <img src={url} alt={title} />
      <h2 className="h4">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
