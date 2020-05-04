import React from "react";

function CardItem(props) {
  return (
    <div>
      <div className='card-item'>
        <img src={props.icon} alt='' />
        <h1>{props.header}</h1>
        <p>{props.copy}</p>
      </div>
    </div>
  );
}

export default CardItem;
