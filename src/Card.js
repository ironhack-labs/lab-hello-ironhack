import React, { Component } from "react";


 class Card extends Component {

  render(props) {
  return (

    <div className = "card">
        <div><img src = {this.props.imgsrc}/></div>
        <div>{this.props.h2}</div>
        <div> {this.props.p}</div>
        
    </div>
  )
  }
} 


export default Card;