import React from "react";


function InfoBox(props) {
    return (
    <div className="details">
    <div className="detailBlock">

    <img className="imgInfo" src={props.image} alt="" />
    <h3>{props.header}</h3>
    <p>{props.text}</p>

    </div>
    </div>
    )
}

export default InfoBox;