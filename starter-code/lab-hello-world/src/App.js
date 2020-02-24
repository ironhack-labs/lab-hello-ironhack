import React from 'react';

import './App.css';

function App() {
  return (
    <div className="back-color">
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <h4 class="text-white">Collapsed content</h4>
            <span class="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">IronBeer</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
      <div className="container spacer">
        <div className="row">
          <div className="col-md-6">
            <h1 className="whiteColor">Say Hello to ReactJS</h1>
            <p className="pcolor">whc wdcwdvewv wdvcevtjtyj </p>
            <a className="button" href="*">awesomee!</a>
          </div>
        </div>
      </div>

      <footer className="beautyfooter">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img src="./images/icon1.png"></img>
              <h3>Declarative</h3>
              <p>dlfbklsbfkasbckasvckvakxcvkac</p>
            </div>
            <div className="col-3">
              <img src="./images/icon2.png"></img>
              <h3>Declarative</h3>
              <p>dlfbklsbfkasbckasvckvakxcvkac</p>
            </div>
            <div className="col-3">
              <img src="./images/icon3.png"></img>
              <h3>Declarative</h3>
              <p>dlfbklsbfkasbckasvckvakxcvkac</p>
            </div>
            <div className="col-3">
              <img src="./images/icon4.png"></img>
              <h3>Declarative</h3>
              <p>dlfbklsbfkasbckasvckvakxcvkac</p>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}

export default App;
