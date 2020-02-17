import React from "react";

export default function Button({ children, link }) {
  return (
    <a href={link} className="btn btn-light">
      {children}
    </a>
  );
}
