import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Button from './components/Button';
import Subtitle from './components/Subtitle';
import Information from './components/Information';
import Header from './components/Header';

class App extends React.Component{

  render (){
    return (
      <div className="App">
        <header  className="App-header">
            <Title className="title-header" content="Say hello to ReactJS"></Title>
            <Subtitle className="subtitle-header" content="You will learn a frontend framework from scratch, to become an Ninka Developer."></Subtitle>
            <Button className="button" content="Awesome!"></Button> 
        </header>
        <section className="container-information">
          <Information
            url="/images/icon1.png"
            title="Declarative"
            description="React makes it painless to create interactive Uls." 
          />
          <Information
            url="/images/icon2.png"
            title="Components"
            description="Build encapsulated components that manage their state."
          />
          <Information
            url="/images/icon3 (1).png"
            title="Single-Way" 
            description="A set of immutable values are passed to the component's." 
          />
          <Information
            url="/images/icon4 (1).png"
            title="JSX" 
            description="Staticaly-typed, designed to run onmodern browsers." 
          />
          </section>
    </div>
    );
  }
}


export default App;
