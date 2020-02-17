import React from "react";

export default function MainContent({ bg, children }) {
  return (
    <section
      style={{
        background: bg
      }}
    >
      {children}
    </section>
  );
}
