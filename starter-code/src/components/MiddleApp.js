import React, { Component } from 'react';
//import photo from '..\..\images\icon1.png'


class MiddleApp extends Component {
    render() {
        return (
            <div className='middleClass'>
                <div><img src='..\..\images\icon1.png' alt="photo" />
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive Uls</p></div>
                <div><img src='..\..\images\icon2.png' alt="photo" />
                <h2>Components</h2>
                <p>Built encapsulated components that manage their state</p></div>
                <div><img src='..\..\images\icon3.png' alt="photo" />
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the components</p></div>
                <div><img src='..\..\images\icon4.png' alt="photo" />
                <h2>JSX</h2>
                <p>Statically typed, designed to run on modern browsers</p></div>
                
            </div>
        )
    }
}

export default MiddleApp;