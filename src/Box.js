import React, { Component } from "react";

const Box = ({imgUrl, title, description}) => {
    return <div className={"col-xs-12 col-sm-6 col-md-3"}>
            <div className="row"><img className="box" src={imgUrl} alt=""/></div>
            <div className="row"><h4 className="title">{title}</h4></div>
            <div className="row"><p className="description">{description}</p></div>
        </div>

}

export default Box;