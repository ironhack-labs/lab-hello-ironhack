import React, { Component } from "react";
import "./button.css"

class Button extends Component{

    constructor(){
        super()
    }
    render(){
        return(
            <div className="button">
                <button>Awesome!</button>
                </div>
        )
    }
}

export default Button