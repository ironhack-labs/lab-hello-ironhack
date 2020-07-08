import React, { Component } from 'react'
import Button from "./Button"

class Section1 extends Component {
    render() {
        return (
            <div id="section1">
                <h1 className="title">Say hello to ReactJS</h1>
                <p>You will learn a Frontend framework from scratch to become an Ninja Developer.</p>
                <Button value="Awesome!" />
            </div>
        )
    }
}

export default Section1;