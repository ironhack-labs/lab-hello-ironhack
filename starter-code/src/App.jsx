import React from 'react';
import './App.css';
import './images/icon1.png'
import './images/icon2.png'
import './images/icon3.png'
import './images/icon4.png'


class App extends React.Component {
  render() {
    return (
      <div>

        <div id='section1'>
          <div class='center'>
            <h1> Say hello to ReactJS</h1>
            <p>You will learn a Frontend frameworkrom scratch, to become a Ninka developer.</p>

            <button>Awesome!</button>
          </div>
        </div>

        <div id='section2'>
          <div class='block'>
            <img src={require('./images/icon1.png')} alt="Test" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>


          <div class='block'>
            <img src={require('./images/icon2.png')} alt="Test" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>

          <div class='block'>
            <img src={require('./images/icon3.png')} alt="Test" />
            <h3>Single Way</h3>
            <p>A set of immutable values are passed to components.</p>
          </div>

          <div class='block'>
            <img src={require('./images/icon4.png')} alt="Test" />
            <h3>JSX</h3>
            <p>Statically typed, designed to run on modern browsers.</p>
          </div>
        </div>

      </div >






    );
  }
}

export default App;
