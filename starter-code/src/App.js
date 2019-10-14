/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="fundoazul">
          <div className="nav">
            <img src="/images/ironhack-logo.svg" width="100px" />
            <img src="/images/menu-top.svg" width="30px" />
          </div>
          <div className="bcg">
            <div className="text-bcg">
              <h1 className="text">Say hello to ReactJs</h1>
              <p className="text-sub">
                You will learn a Frontend framework from scratch, to becaome an
                Ninka Developer
              </p>
              <p className="fake-buttom">Awesome!</p>
            </div>
            <img src="/images/react-logo.svg" />
          </div>
        </div>
        <div className="fundobranco">
          <figure>
            <img src="/images/icon1.png" />
          </figure>
          <figure>
            <img src="/images/icon2.png" />
          </figure>
          <figure>
            <img src="/images/icon3.png" />
          </figure>
          <figure>
            <img src="/images/icon4.png" />
          </figure>
        </div>
      </div>
    );
  }
}

export default App;
