import React from "react";

const features = (props) => {
    return (
        <div id="features">
            <img src={props.img} width="130px" height="130px" />
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default features;