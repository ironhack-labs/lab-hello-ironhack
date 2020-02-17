import React from 'react'

export default function Splashtext ({bigText, smallText}) {
  return (
    <div className="splash-text-container">
      <h1>{bigText}</h1>
      <p>{smallText}</p>
    </div>
  );
}
