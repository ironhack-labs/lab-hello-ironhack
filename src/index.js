import React from 'react';
import ReactDOM from 'react-dom'; // the only place we need this ReactDOM to render the <App /> Component inside the 'root'
import App from './App'; 
// import the App.js with the component <App />
// in the 'root' the component <App /> will be mounted

//ReactDOM.render() method, it renders it in the div with the id equals to root.
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render (
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);