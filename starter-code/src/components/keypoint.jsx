import React from 'react'

export default function Keypoint ({title, desc, imgSrc}) {
  return (
    <div className="keypoint">
      <img src={imgSrc} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
