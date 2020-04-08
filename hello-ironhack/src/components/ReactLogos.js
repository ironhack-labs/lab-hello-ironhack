// components/ReactLogos.js

import React from 'react';

function LogoCopies(props) {
  const { numberCopies } = props;
  const imageArray = [];
  for (let i = 0; i < numberCopies; i++) {
    imageArray.push(<img key={i} alt="React logo" src="/images/react-logo.svg" />);
  }
  return imageArray;
}

function ReactLogos(props) {
  const { className, numberCopies } = props;
  return (
    <div className={className}>
      <LogoCopies numberCopies={numberCopies} /> 
    </div>
  );
}

export default ReactLogos;
