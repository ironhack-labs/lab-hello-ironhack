import React, { Component } from 'react'


export default class Footer extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <article className="footer">
        <img src={this.props.fImage}/>
        <h3>
          {this.props.fTitle}
        </h3>
        <p>
          {this.props.fText}
        </p>
      </article>
    )
  }
}
