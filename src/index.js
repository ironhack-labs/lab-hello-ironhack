import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const greeting = (
    <h1 style={{color: 'white'}}>Say Hello to ReactJS</h1>
)

ReactDOM.render(
    greeting,
    document.getElementById('root')
)