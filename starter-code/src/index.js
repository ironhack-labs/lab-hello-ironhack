import React from "react";
import ReactDOM from 'react-dom';
import App from "./App.js";

// This portion act like Layout.hbs and <App/> like {{body}}
// It connects index.html and index.js together
ReactDOM.render(
    <main>
        <App />
    </main>,
    document.getElementById('root')
);