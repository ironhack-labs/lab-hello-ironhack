import React from 'react';

function Card (props) {
    const { src, alt, cardTitle, cardText } = props;

    return (
      <div className="card" >
        <img src={src} className="card-img-top" alt={alt}/>
        <div className="card-body">
          <h1 className="card-title">{cardTitle}</h1>
          <p className="card-text">{cardText}</p>
        </div>
      </div>
    )
}

export default Card;

