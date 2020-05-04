import React from "react";

function CardItem(props) {
  return (

    <div className='card__single'>
      <img src={props.icon} alt='' />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>

  );
}

export default CardItem;