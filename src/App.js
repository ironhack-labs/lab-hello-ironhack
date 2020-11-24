// 1. Importaciones
import React, { Component } from "react";
import "./App.css";
import Header from './components/Header';
import CardList from './components/CardList';
import ihLogo  from '../public/images/ironhack-logo.svg'
import menuIcon from '../public/images/menu-top.svg'
import reactLogo from '../public/images/react-logo.svg'
// 2. Funciones o Clases
class App extends Component {
  render() {
    const data = [
      {
        img: './images/icon1.png',
        title: 'Declarative',
        desc: 'React makes it painless to create interactive UIs'
      },
      {
        img: './images/icon2.png',
        title: 'Components',
        desc: 'Build encapsules components that manage their state'
      },
      {
        img: './images/icon3.png',
        title: 'Single-Way',
        desc: 'A set if inmutable values are passed to the components'
      },
      {
        img: './images/icon4.png',
        title: 'JSX',
        desc: 'Statically-typed, designed to run in modern browsers'
      },
    ]

    return (
            <div>
            <div className='sec1'>
              <div className="nav">
              <Header 
                img={ihLogo} />
              <Header img={reactLogo} />
              <Header
                img={menuIcon} />
              </div>
              <div className='sec1_1'>
              <div className='mainText'>
                  <h1>Say hello to <br/> ReactJS</h1>
              </div>
              <div className='secondaryText'>   
                <h2> 
                You will learn how to use<br/>
                the most popular frontend library,<br/>
                and become a super Ninja developer.
                </h2>
              </div>
              <div className='awesomeB'>
                <button className='awesomeButton'><h2>Awesome!</h2></button>
              </div>
              </div>
            </div>
            <div className='sec2'>
              {data.map((item, index) => 
                <CardList key={index} title={item.title} desc={item.desc} img={item.img} />
              )}
            </div>
            </div>
    )
 }
}
// 3. Exportación 
export default App;