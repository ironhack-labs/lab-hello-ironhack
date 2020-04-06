import React from 'react';
import './icons.css';

function icon (props) {
  const { icons, title, description } = props;
  console.log(props);
  return (
    <div className="icons-box">
      <img src={icons} className="" alt="logo" />
      <h3 className="">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default icon;

