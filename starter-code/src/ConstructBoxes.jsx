import React from 'react';

const ConstructBoxes = (props) => {
  return (
    <div className="box">
      <figure>
        <img src={props.obj.img} alt={props.obj.title} />
      </figure>
      <h3>{props.obj.title}</h3>
      <p>{props.obj.parag}</p>
    </div>
  );
};

export default ConstructBoxes;
