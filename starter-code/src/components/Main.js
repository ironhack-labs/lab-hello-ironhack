import React, {Component} from 'react';
import '../App.css';
import TheRest from '../components/TheRest';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Main extends Component {
  render(){
    return (
      <div className="App">
        <Nav />
        <TheRest />
        <Footer />
      </div>
    );
  }
}

export default Main;