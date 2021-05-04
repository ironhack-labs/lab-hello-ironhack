const React = require('react');
const ReactDOM = require('react-dom');
import './css.css';

const element = <h1>Hello from React</h1>;

const rootElement = document.getElementById('root');

ReactDOM.render(element, rootElement);
