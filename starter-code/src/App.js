import React, { Component } from "react";
import "./App.css";
import {BottomMenu} from './buttonMenu'
// import reactLogo from '../public/images/react-logo';

const NavBar = ({img})=> {
  return (
    <div>
      <img src={img}></img>
    </div>
  )
}

const Title = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Subtitle = ({subtitle}) => {
  return (
    <div>
      <h4>{subtitle}</h4>
    </div>
  )
}

const Button = ({button}) => {
  return (
    <div>
      <button>{button}</button>
    </div>
  )
}


 
export const App = () => {
  return (
    <div className='test'>
      <NavBar img="../images/ironhack-logo.svg"/>
      <NavBar img="../images/menu-top.svg"/>
      <Title title='Say hello to ReactJS'/>
      <Subtitle subtitle='You will learn a Frontend framework from scratch, to become a Ninja Developer.'/>
      <Button button='Awesome!'/>
      <BottomMenu url="../images/icon1.png" title='Declarative' text='React makes it painless to create interactive Uls.'/>
      <BottomMenu url="../images/icon2.png" title='Components' text='Build encapsulated components that manage their state.'/>
      <BottomMenu url="../images/icon3.png" title='Single-Way' text="A set of inmutable values are passed to the component's."/>
      <BottomMenu url="../images/icon4.png" title='JSX' text='Statistically-typed, designed to run on modern browsers.'/>
    </div>
  )
}

