import React from 'react';
import './icons.css';

function icon (props) {
  const { icons, title, description } = props;
  console.log(props);
  return (
    <div className="icons-box">
      <img src={icons} className="icons-image" alt="logo" />
      <h3 className="icons-title">{title}</h3>
      <p className="icons-description">{description}</p>
    </div>
  );
}

export default icon;

