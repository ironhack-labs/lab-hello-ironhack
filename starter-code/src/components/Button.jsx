import React from "react";

export default function Button({ bgcolor, color, children }) {
  return (
    <button className="btn" style={{ background: bgcolor, color }}>
      {children}
    </button>
  );
}
