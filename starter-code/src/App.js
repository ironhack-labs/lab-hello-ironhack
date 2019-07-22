import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    const header = (
      <header className="header">
        <nav>
          <img src="../images/ironhack-logo.svg" />
          <img src="../images/menu-top.svg" />
        </nav>
          <div className="textbox">
          <h1>Say hello to ReactJS</h1>
          <h3>You will learn a Frontend lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos</h3>
          <a href="#" className="button">Awesome!</a>
        </div>
      </header>
    );

    const card = {
      imgsUrls: [
        '../images/icon1.png',
        '../images/icon2.png',
        '../images/icon3.png',
        '../images/icon4.png',
      ],
      headerTitles: ['Declarative', 'Components', 'Single-Way', 'JSX'],
      text: ['Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI', 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI', 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI', 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI']
    };

    const cards = (src, header, text) => (
        <div className="card">
          <img src={src} />
          <h4>{header}</h4>
          <p>{text}</p>
        </div>
      );

    const infos = {
      logoUrl: '../public/images/ironhack-logo.svg',

    };

    return (
      <div className="App">
        {header}
        <div className="cardsBox">
          {
            cards(card.imgsUrls[0],
            card.headerTitles[0],
            card.text[0])
          }
          {
            cards(card.imgsUrls[1], card.headerTitles[1], card.text[1])}
          {
            cards(card.imgsUrls[2], card.headerTitles[2], card.text[2])}
          {
            cards(card.imgsUrls[3], card.headerTitles[3], card.text[3])}
        </div>
      </div>
    );
  }
}

export default App;