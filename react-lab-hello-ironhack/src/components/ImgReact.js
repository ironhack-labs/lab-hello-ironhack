import React, { Component } from "react";
import './ImgReact.css';

class ImgReact extends Component {
    render() {
        const aClassName = this.props.aClassName;

        return <img className={aClassName} src='/images/react-logo.svg' alt="react logo" />;
    }
}

export default ImgReact;