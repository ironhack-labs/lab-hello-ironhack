import React from 'react';
import Cards from './Cards';

function App() {
    return(
        <div className="cards-container">
        <Cards images='/images/icon1.png' title='Declarative' description='React makes it painless to create interactive UIs.'/>
        <Cards images='images/icon2.png' title='Components' description='Build encapsulated components that manage their state.'/>
        <Cards images='/images/icon3.png' title='Single-Way' description='A set of inmutable values are passed to the components.'/>
        <Cards images='/images/icon4.png' title='JSX' description='Statiscally-typed, designed to run on modern browsers.'/>
    
    </div>
    ) 
}

export default App;



