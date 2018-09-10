import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}


class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <img  class="logo" src="/ironhack-logo.svg" alt="ironhack-logo"/>
        <h1>Say Hello to React JS</h1>
        <h3>You will learn a Frontend framework from scratch, to become a worldclass Ninja Developer.</h3>
        <button  class="btn" color="white">Awesome!</button>
      </div>   
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div class="cards">
      <Card picture="icon1.png" minititle="Declarative">React makes it painless to create interactive UIs.</Card>
      <Card picture="icon2.png" minititle="Components">Build encapsulated components that manage their state</Card>
      <Card picture="icon3.png" minititle="SingleWay" children="A set of immutable values are passed to the components."/>
      <Card picture="icon4.png" minititle="JSX" children="Statically-typed, designed to run on modern browsers."/>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
     <div>
       <div class="cardpic"><img src={this.props.picture} alt=""/></div>
       <h3>{this.props.minititle}</h3>
       <p>{this.props.children}</p>
     </div>
    )
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);