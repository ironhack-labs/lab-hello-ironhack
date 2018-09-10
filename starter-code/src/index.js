// jshint ignore: start

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
      <h1>App</h1>
      <Header></Header>
      <Content></Content>
      </div>
    );
  }
}



class Header extends React.Component {
    render() {
      return (
        <div className=" dark-blue">
        <h1> Say hello to <p>
            ReactJS</p> 
            </h1>
        </div>
      );
    }
  }

  class Content extends React.Component {
    render() {
      return (
        <div className=" cards content">
       <Card image="/images/icon1.png" title="Declarative">React makes it painless to create interactive UIs.</Card>
       <Card image="/images/icon2.png" title="Components">Build encapsulated components that manage their state.</Card>
       <Card image="/images/icon3.png" title="Single-Way">A set of immutable values are passed to the components.</Card>
       <Card image="/images/icon4.png" title="JSX">Statically typed, designed to run on modern browsers.</Card>
        </div>
      );
    }
  }

  class Card extends React.Component {
    render() {
      return (
        <div className="card">
            <div className="img">
         <img src={this.props.image} alt=""/>
            </div>
        <h4>{this.props.title}</h4>
        <p>{this.props.children}</p>
        </div>
      );
    }
  }




  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );