import React, { Component } from 'react'

export class Features extends Component {
    render() {
        return this.props.features.map((feature) => (
            <div className="feature">
                <img src={feature.image} alt="something" />
                <h1>{feature.title}</h1>
                <p>{feature.description}</p>
            </div>
        ))

    }
}

export default Features;

