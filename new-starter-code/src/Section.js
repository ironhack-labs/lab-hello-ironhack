import React from 'react';
import './App.css';

function Section() {
  return (
    <div className="section flex">
     <div>
     <div>
       <img src="images/icon1.png"></img>
     </div>
     <div>
       <h4>Declrative</h4>
     </div>
     <div>
       <p>
         React makes it painless to create interactive UIs.
       </p>
     </div>
     </div>
     <div>
     <div>
       <img src="images/icon2.png"></img>
     </div>
     <div>
       <h4>Components</h4>
     </div>
     <div>
       <p>
         Building encapulated components that manage their state
       </p>
     </div>
     </div>
     <div>
     <div>
       <img src="images/icon3.png"></img>
     </div>
     <div>
       <h4>Single-Way</h4>
     </div>
     <div>
       <p>
         A set of immutable values are passed to the component's
       </p>
     </div>
     </div>
     <div>
     <div>
       <img src="images/icon4.png"></img>
     </div>
     <div>
       <h4>JSX</h4>
     </div>
     <div>
       <p>
         Statically-typed, designed to run on modern browsers.
       </p>
     </div>
     </div>
    </div>

  );
}

export default Section;
