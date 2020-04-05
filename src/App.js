import React, {Component} from 'react';
import './App.css';

class App extends Component {

  render() {
    const ironLogo = (logoImg) => {
      return `${logoImg.image}`;
    }
    const navMenu = (navImg) => {
      return `${navImg.image}`;
    }
    const decBox = (declarativeImg) => {
      return `${declarativeImg.image}`;
    }
    const comBox = (componentsImg) => {
      return `${componentsImg.image}`;
    }
    const singBox = (singleImg) => {
      return `${singleImg.image}`;
    }
    const jsxBox = (jsxImg) => {
      return `${jsxImg.image}`;
    }
    const logoReact = (reactImg) => {
      return `${reactImg.image}`;
    }
    const btnReact = (awesomeBtn) => {
      return `${awesomeBtn.name}`;
    }
    const formatDescription = (subtitle) => {
      return `${subtitle.description}`;
    }


    //LINKS PARA RETURNS
    const logoImg = {
      image: './images/ironhack-logo.svg'
    };
    const awesomeBtn = {
      name: 'Awesome'
    };
    const navImg = {
      image: './images/menu-top.svg'
    };
    const reactImg = {
      image: './images/react-logo.svg'
    };
    const declarativeImg = {
      image: './images/icon1.png'
    };
    const componentsImg = {
      image: './images/icon2.png'
    };
    const singleImg = { 
      image: './images/icon3.png'
    };
    const jsxImg = {
      image: './images/icon4.png'
    };
    const subtitle = {
      description: 'You will learn a Frontend framework from scratch, to become an Ninka Developer'
    };

   
    //PARA REFELEJAR CADA ELEMENTO EN SU BOX
    const element = (
     <p className = "subtitle">
      {formatDescription(subtitle)}!
     </p>
    )
    const awesome = (
      <button className = "button">
       {btnReact(awesomeBtn)}!
      </button>
    )
    const logo = (
      <img class="logomenu" src={ironLogo(logoImg)}/>
    )
    const nav = (
      <img class="navmenu" src={navMenu(navImg)}/>
    )
    const decSection = (
      <img src={decBox(declarativeImg)}/>
    )
    const comSection = (
      <img src={comBox(componentsImg)}/>
    )
    const singSection = (
      <img src={singBox(singleImg)}/>
    )
    const jsxSection = (
      <img src={jsxBox(jsxImg)}/>
    )
    const reactLogoImg = (
      <img className="imageReact" src={logoReact(reactImg)}/>
    )
   
    //SE AÑADIRÁ A ROOT
    return (
      <div>
      <div className="App">
        {reactLogoImg}
        {nav}
      {logo}
        <h1 className ="title"> Say hello to ReactJs! </h1>
        {element}
        {awesome}
        </div>
        <div className="allSections">
        <div className="Sections">
          {decSection}
          <h3>Declarative</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="Sections">
          {comSection}
          <h3>Components</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="Sections">
          {singSection}
          <h3>Single-Way</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="Sections">
          {jsxSection}
          <h3>JSX</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
