import React, { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import Card from '../Card/Card';
import './App.css';

import cards from '../../utils/cards';

const App = () =>
  <Fragment>
    <header className="header">
      <Navbar />
      <div className="title container">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from stratch, to become an Ninja Developer.</p>
        <Button text="Awesome!" />
      </div>
    </header>

    <main>
      <section className="cards container">
        {cards.map(card => 
          <Card 
            title={card.title}
            content={card.content}
            imgPath={card.imgPath}
          />
        )}
      </section>
    </main>
  </Fragment>

export default App;
