import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const card1 = {
      tittle: 'Declarative',
      description: 'React makes it painless to create interactive UIs.',
      url: '../images/icon1.png'
    };
    const card2 = {
      tittle: 'Components',
      description: 'Build encapsulated components  that  manage their state.',
      url: '../images/icon2.png'
    };
    const card3 = {
      tittle: 'Single-Way',
      description: "A set of immutable values are passed to the component's.",
      url: '../images/icon3.png'
    };
    const card4 = {
      tittle: 'JSX',
      description: 'Statically-typed, designed to run on modern browsers.',
      url: '../images/icon4.png'
    };
    const card = (cardelement) => {
      return <div className="col-sm-3"><div className="bg-transparent card"><img className="card-img-top" src={cardelement.url} alt="Card image cap"/>
      <div className="card-body"><h3 className="card-tittle">{cardelement.tittle}</h3><p class="card-text">{cardelement.description}</p></div>
      </div>
      </div>
  }

    return (
      <div className="App">
      <section className="container-principal">
       <div className="left">
        <h1> Say Hello to ReactJS </h1>
        <p>You will learn a Frontend Framework from scratch, to become an Ninka Developer</p>
        <button type="button" className="btn btn-light">Awesome!</button>
       </div>
      </section>
        <div className="row">
        {card(card1)}
        {card(card2)}
        {card(card3)}
        {card(card4)}
        </div>
      </div>
    );
  }
}


export default App;
