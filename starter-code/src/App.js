import React, { Component } from "react";
import "./App.css";

class App extends Component {

    render() {
      const ironLogo = (logo) => {
        return `${logo.image}`;
      }
      const navMenu = (navReact) => {
        return `${navReact.image}`;
      }
      const ironSection1 = (declarative) => {
        return `${declarative.image}`;
      }
      const ironSection2 = (components) => {
        return `${components.image}`;
      }
      const ironSection3 = (singleImg) => {
        return `${singleImg.image}`;
      }
      const ironSection4 = (jsxImg) => {
        return `${jsxImg.image}`;
      }
      const logoReact = (reactLogo) => {
        return `${reactLogo.image}`;
      }
      const btnReact = (awesomeBtn) => {
        return `${awesomeBtn.name}`;
      }
      const logo = {
        image: './images/ironhack-logo.svg'
      };
      const awesomeBtn = {
        name: 'Awesome'
      };
      const navReact = {
        image: './images/menu-top.svg'
      };
      const reactLogo = {
        image: './images/react-logo.svg'
      };
      const declarative = {
        image: './images/icon1.png'
      };
      const components = {
        image: './images/icon2.png'
      };
      const singleImg = { 
        image: './images/icon3.png'
      };
      const jsxImg = {
        image: './images/icon4.png'
      };
      
  
      const formatDescription = (subtitle) => {
        return `${subtitle.description}`;
      }

     
      const subtitle = {
        description: 'You will learn a Frontend framework from scratch, to become an Ninka Developer'
      };
      
      const element = (
        <p className = "subtitle">
        {formatDescription(subtitle)}!
        </p>
      );
      const awesomeR = (
        <button className = "button">
        {btnReact(awesomeBtn)}!
        </button>
      );
      const image = (
        <img src={ironLogo(logo)}
        width='50'
        height='50'/>
      )
      const navR = (
        <img className="navRe" src={navMenu(navReact)}
        width='20'
        height='20'/>
      )
      const sectionOne = (
        <img src={ironSection1(declarative)}
        width='100'
        height='100'
        />
      )
      const sectionTwo = (
        <img src={ironSection2(components)}
        width='100'
        height='100'
        />
      )
      const sectionThree = (
        <img src={ironSection3(singleImg)}
        width='100'
        height='100'
        />
      )
      const sectionFour = (
        <img src={ironSection4(jsxImg)}
        width='100'
        height='100'
        />
      )
      const reactLogoF = (
        <img className="imageReact" src={logoReact(reactLogo)}
        width='300'
        height='300'
        />
      )
      const reactLogoF2 = (
        <img className="imageReact2" src={logoReact(reactLogo)}
        width='200'
        height='200'
        />
      )
      const reactLogoF3 = (
        <img className="imageReact3" src={logoReact(reactLogo)}
        width='150'
        height='150'
        />
      )
      
      return (
        <div>
        <div className="App">
          {reactLogoF}
          {navR}
          {reactLogoF2}
          {reactLogoF3}
        {image}
          <h1 className ="title"> Say hello to ReactJs! </h1>
          {element}
          {awesomeR}
          </div>
          <div className="allSections">
          <div className="Sections">
            {sectionOne}
            <h3>Declarative</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="Sections">
            {sectionTwo}
            <h3>Components</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="Sections">
            {sectionThree}
            <h3>Single-Way</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="Sections">
            {sectionFour}
            <h3>JSX</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          </div>
        </div>
      );
    }
  }
  
  export default App;