import React from 'react'
import ReactDOM from 'react-dom';

const Section2 = () => {
    return (
    <section className="section2">
        <div className='icons-section2'>
        <img src='./images/icon1.png'/>
        <h1>Declarative</h1>
        <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className='icons-section2'>
        <img src='./images/icon2.png'/>
        <h1>Components</h1>
        <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className='icons-section2'>
        <img src='./images/icon3.png'/>
        <h1>Single-Way</h1>
        <p>A set of immutable values are passed to the component´s.</p>
        </div>
        <div className='icons-section2'>
        <img src='./images/icon4.png'/>
        <h1>JSX</h1>
        <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
        
    </section>
    )
}

export default Section2; 


/*import crew1 from '../assets/crew.png';
<img src={crew1} alt="crew image" />;
*/