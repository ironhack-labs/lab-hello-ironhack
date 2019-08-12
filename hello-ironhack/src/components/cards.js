import React from 'react'
import '../styles/card.css'

const Cards = function(){

    return(
       <div className="container">
        <div className="row">
            <div className="col-3">
                <img src="images/icon1.png"></img>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UI.</p>
            </div>
            
            <div className="col-3">
                <img src="images/icon2.png"></img>
                <h2>Components</h2>
                <p>BUild encapsulated componentes that manage their state.</p>
            </div>
            

            <div className="col-3">
                <img src="images/icon3.png"></img>
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            
            <div className="col-3">
                <img src="images/icon4.png"></img>
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>   
        </div> 
           

       </div> 
    )
}

export default Cards