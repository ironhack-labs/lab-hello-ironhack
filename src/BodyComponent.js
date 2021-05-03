import React from 'react';
import './BodyComponent.css';

function Body (props) {
    return (
        <div className='body'>
           <img src={props.image}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Body;