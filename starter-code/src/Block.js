import React, { Component } from "react";
import "./Block.css";

const Block = (props) => {
    return (
        <div className="container">
            <div className="box">
                <img src={props.image} />
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )
}


export default Block;

