import React, { Component } from 'react'

export default class BodyMain extends Component {
    constructor() {
        super()
        this.logo = {
            img:"images/react-logo.svg"
        }
    }
    
    render() {
        return (
            <div className="header">
                <h1>Say hello to <br />
                    ReactJS</h1>

                <p>You will learn a Frontend<br />
                    framework from scratch, to<br />
                    be become a Ninja Developer.</p>

                <button>Awesome!</button>

                {/* <img height="85" src={this.logo.img} /> */}
            </div>
        )
    }
}
