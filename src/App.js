import React from 'react'; // <== import React
import './App.css'



const App = () => {
    return (
<React.Fragment>
    <div className = 'container'>
        <div className = 'navBar'>
        <img src = './images/ironhack-logo.svg'></img>
        <img src = './images/menu-top.svg'></img>
        </div>
    <div className = 'sectionOne'>
        <h1>
            Say hello to <br /> ReactJS
        </h1>
        <p>
            You will learn how to use 
            <br />
            the most popular frontend library, 
            <br />
            and become a super Ninja developer.
        </p>
        <button>Awesome!</button>
    </div>
    </div>
    
    <div className= 'sectionTwo'>
        <article>
            
            <img src = './images/icon1.png'></img>
            <h2>Declarative</h2>
            <p>React makes it<br /> painless to create <br /> interactive UIs</p>
           
        </article>
        <article>
        
            <img src = './images/icon2.png'></img>
            <h2>Components</h2>
            <p>Build encapsulated it<br /> components that <br /> manage their state</p>
        </article>   
        <article>
            <img src = './images/icon3.png'></img>
            <h2>Single-Way</h2>
            <p>A set of immutable<br /> values are passed to <br /> the component's</p>
        </article>   
        <article>
            <img src = './images/icon4.png'></img>
            <h2>JSX</h2>
            <p>Statically-typed<br /> designed to run on <br /> modern browsers</p>
        </article>       
    </div>



</React.Fragment>
)
};
 
export default App;