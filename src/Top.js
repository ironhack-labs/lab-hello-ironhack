import React, { Component } from "react";

const Top = ({title, text}) => {
    return (
        <div>
            <div className="topTop">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
      )
}


export default Top;