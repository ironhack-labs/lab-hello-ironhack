import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div class="App-header">
                <h1>Say Hello to <br />   React Js </h1>
            <h4> You will learn a Frontend <br />
            framework from scratch, to <br />
            become a Ninja Developer
            </h4>
            <button type="button"  style={{
             backgroundColor: "white",
             color: "#1E2333",
             fontFamily: "Roboto",
             fontWeight: "bolder",
             borderStyle: "none"

            }} class="btn btn-lg btn-primary" disabled>Awesome</button>
                
            </div>
        )
    }
}

