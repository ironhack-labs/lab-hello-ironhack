import React from "react";
import "./CardInfo.css";

export default function CardInfo(props) {
    return (
        <div className="card-info">
            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
            <p>{props.p}</p>
        </div>
    );
}