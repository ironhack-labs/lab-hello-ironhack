// components/BenefitTile.js

import React from 'react';

function BenefitTile(props) {
  const { image, title, text } = props;
  return (
    <div className="benefit-tile">
      <img src={image} className="benefit-image" alt="{title} benefit" />
      <h2 className="benefit-title">{title}</h2>
      <p className="benefit-text">{text}</p>
    </div>
  );
}

export default BenefitTile;
