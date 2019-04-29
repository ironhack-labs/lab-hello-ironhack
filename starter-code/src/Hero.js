import React, { Component } from 'react'
import '../public/stylesheets/Hero.css';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
          <div className="hero-title-wrapper">
            <h1>Say hello to ReactJS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur exercitationem neque sint ratione fuga officia sequi ex inventore veritatis, quam, voluptatem tempore incidunt, quia minus quidem numquam. Nostrum, officia?</p>
            <button>Awesome!</button>
          </div>
      </div>
    )
  }
}
