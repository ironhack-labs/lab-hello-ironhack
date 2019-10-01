import React, { Component } from 'react'
import Btn from '../UI/Btn/Btn'
import './Home.css'

export default class Home extends Component {
  constructor() {
    super()
    this.title = <h2>Say hello to <br></br>ReactJS</h2>;
    this.text = 
          <p>
          You will learn a Frontend<br></br>
          framework from scratch, to<br></br>
          becaome an Ninka Developer
          </p>;
  }
  render() {
    return (
      <div className='Home'>
        {this.title}
        {this.text}
        <Btn text="Awesome!"></Btn>
      </div>
    )
  }
}