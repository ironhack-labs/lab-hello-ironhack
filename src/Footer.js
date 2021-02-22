import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <article>
                    <img src={this.props.image1}></img>
                    <h4>Declarative</h4>
                    <p>React makes it paintless to create interactive UIs</p>
                </article>
                <article>
                    <img src={this.props.image2}></img>
                    <h4>Declarative</h4>
                    <p>React makes it paintless to create interactive UIs</p>
                </article>
                <article>
                    <img src={this.props.image3}></img>
                    <h4>Declarative</h4>
                    <p>React makes it paintless to create interactive UIs</p>
                </article>
                <article>
                    <img src={this.props.image4}></img>
                    <h4>Declarative</h4>
                    <p>React makes it paintless to create interactive UIs</p>
                </article>
            </div>
        )
    }
}
