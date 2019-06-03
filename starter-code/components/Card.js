import React, {Component} from "react"
import "../src/Card.css"

class Card extends Component {
  constructor(props) {
    super(props)
    this.imgUrl = this.props.imgUrl,
    this.header = this.props.header,
    this.text   = this.props.text
  }

  render() {
  return (  <article>
      <img src={this.imgUrl}/>
      <h2>{this.header}</h2>
      <p>{this.text}</p>
    </article> 
  )
  }

}



export default Card


