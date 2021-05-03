import React from 'react';
import './Cards.css'

// const Cards = () => {
//   return (
//     <div className="cards">
//     <h2></h2>
//     <img src="/images/icon1.png"/>
//     </div>
//   )
// }

function Cards ({ cardImage, cardTitle, cardText }) {
    return (
      <div className="cards">
      <img className="img-card" src={cardImage}/>
      <h2>{cardTitle}</h2>
      <p>{cardText}</p>
      </div>
    )
  }

export default Cards;