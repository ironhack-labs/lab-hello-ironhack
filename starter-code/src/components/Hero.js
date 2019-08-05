import React, { Component } from 'react';
import Nav from './Nav'
import Title from './Title'
import Description from './Description'
import Button from './Button'
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="App-hero">
        <Nav />
        <Title  data1 = "Say hello to" 
                data2="ReactJS"
        />
        <Description  data1 = "You will learn a Frontend" 
                      data2="framework from scratch, to" 
                      data3="become a Ninka developer."
        />
        <Button />
      </div>
    );
  }
}

export default Hero;