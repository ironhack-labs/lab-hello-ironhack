import React, {Component} from 'react';

export default class Hero extends Component {
    render({title, text, button} = this.props) {
        return (
            <section id="hero">
                <h1>{title}</h1>
                <p>{text}</p>
                <a className="main-cta" href="#">{button}</a>
            </section>
        )
    }
}

