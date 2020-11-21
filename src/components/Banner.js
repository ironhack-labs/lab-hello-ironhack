import React, { Component } from "react";

class Banner extends Component {

    render() {

        return (
            <section id="banner">
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                <a href="#">{this.props.button}</a>
            </section>
        )

    }

}

export default Banner