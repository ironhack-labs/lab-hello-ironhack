import React, { Component } from "react";
import "./App.css";


const icon1 = "/images/icon1.png";
const icon2 = "/images/icon2.png";
const icon3 = "/images/icon3.png";
const icon4 = "/images/icon4.png";
const ihLogo = "/images/ironhack-logo.svg";
const reactLogo = "/images/react-logo.svg";
const menuBarImage = "/images/menu-top.svg";

class App extends Component {
  render() {
    // const MiniDiv = props=>{
      
    //     // <div>
    //     //   <img src={props.img} alt=""/>
    //     //   <h4>{props.title}</h4>
    //     //   <p>{props.description}</p>
    //     // </div>

      
    // }
   
    // const FirstDiv =(props)=>{
    //    let saludo = <h1> Hola </h1>; 
    //    // <MiniDiv img={icon1} title='Declarative' description='React makes it painless to crete interactive UIs.'/>
    // }

    return (
      <div>
        <main >
       
        
          <div className='navy '> 
          
            <div className='navbar'>
              <img className='logo' src={ihLogo} alt="icono" />
              <img className='logo' src={menuBarImage} alt="menu" />
            </div>
            <div className='titlePosition'>
              <h1 className='superBold'> Say Hello to ReactJS </h1> 
              <p>
                You will learn how to use the most popular frontend library and
                become a supe Ninja developer.
              </p>
            <button> Awsome! </button>
            </div>
          </div>
          <div className='miniDivs'> 
            <div className='eachDiv'>
                <img src={icon1} alt=""/>
                <h4>Declarative</h4>
                <p>React makes it painless to crete interactive UIs.</p>
            </div>
            <div className='eachDiv'>
            <img src={icon2} alt=""/>
                <h4>Components</h4>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className='eachDiv'>
                <img src={icon3} alt=""/>
                <h4>Single-Way</h4>
                <p>A set of inmutable values are passed to the component's.</p>
            </div>
            <div className='eachDiv'>
                <img src={icon4} alt=""/>
                <h4>JSX</h4>
                <p>Statically-typed designed to run in modern browsers.</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
