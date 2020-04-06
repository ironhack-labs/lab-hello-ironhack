import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import App from './App';
import Card from './card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Card image="./public/icon1.png" title="Declarative" desc="React makes it painless create interactive UIs." />
    <Card image="./public/icon2.png" title="Declarative" desc="React makes it painless create interactive UIs." />
    <Card image="./public/icon3.png" title="Declarative" desc="React makes it painless create interactive UIs." />
    <Card image="./public/icon4.png" title="Declarative" desc="React makes it painless create interactive UIs." />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
