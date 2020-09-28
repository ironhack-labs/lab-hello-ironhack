import React from 'react';


const Feature = props => {
  return (
    <div className="feature">
      <img src={props.src} alt={props.name} />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
    </div> 
  
  )
}
  
export default Feature;
