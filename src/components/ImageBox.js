import React, { Component } from "react";

export default class ImageBox extends Component {

    render({icon, title, text}=this.props) {

        return (
            <div>
                <img src={icon}/>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        )

    }

}