import React from 'react';

function Cards (){
    return (
        <div className="container cards">
        <div>
            <div>
                <img src='./images/icon1.png' />
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs</p>
            </div>
        </div>
        <div>
            <div>
                <img src='./images/icon2.png' />
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state</p>
            </div>
        </div>
        <div>
            <div>
                <img src='./images/icon3.png' />
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the components</p>
            </div>
        </div>
        <div>
            <div>
                <img src='./images/icon4.png' />
                <h3>JSX</h3>
                <p>Statically-typed to run on modern browsers</p>
            </div>
        </div>
    </div>
    );
};

export default Cards;