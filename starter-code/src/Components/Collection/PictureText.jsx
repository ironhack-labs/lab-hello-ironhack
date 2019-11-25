import React, { Component } from 'react'

export class PictureText extends Component {
    render(props) {
        return (
            <div>
                <img className="imgPictureTextClass" src={this.props.imgVal} alt=""/>
                <h1>{this.props.headerVal}</h1>
                <p className="textPictureTextClass">{this.props.parVal}</p>
            </div>
        )
    }
}

export default PictureText
