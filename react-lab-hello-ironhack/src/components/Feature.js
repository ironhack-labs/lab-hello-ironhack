import React, { Component } from "react";
import "./Feature.css";

class Feature extends Component {
    render() {
        const srcImg = this.props.srcImg;
        const altImg = this.props.altImg;
        const title = this.props.title;
        const description = this.props.description;

        return <article>
            <img src={srcImg} alt={altImg} />
            <h2>{title}</h2>
            <p className="feature-desc">{description}</p>
        </article>;
    }
}

export default Feature;