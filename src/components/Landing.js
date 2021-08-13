import React from 'react';
import BtnWhite from './BtnWhite';

const Landing = ({ title, text }) => {
  return (
    <div className="landing">
      <h1>{title}</h1>
      <p>{text}</p>
      <BtnWhite  name='Awesome!' />
    </div>
  );
};

export default Landing;
