import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

//the App element is being imported from app.js and what we are rendering inside root
// this is JSX syntax - js and html on the same page

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)