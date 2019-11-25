import React from "react";

export default function Logo({ filepath, text }) {
  return <img src={filepath} alt={text} />;
}
