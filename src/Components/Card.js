import React from "react";

function Card (props) {
    return (
        <div className="card-feature">
            <img src={props.imgSource} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description} </p>
        </div>
    )
}

export default Card;