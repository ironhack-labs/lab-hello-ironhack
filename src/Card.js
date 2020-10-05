import React from 'react'

const Card = (props) => {
  const { card } = props;
  return (
    <div className='card'>
      <img alt={card.title} src={card.img_url} />
      <h2>{card.title}</h2>
      <p>{card.content}</p>
    </div>
  )
}

export default Card;