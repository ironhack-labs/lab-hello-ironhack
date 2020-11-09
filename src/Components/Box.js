import React, { Component } from "react";

const Box = ({img, title, description})  => {
    return (<div className="box">
            <img className="img_box" src={img} />
            <h3>{title}</h3>
            <p className="p_box ">{ description}</p>
        </div>)
         
}


export default Box;