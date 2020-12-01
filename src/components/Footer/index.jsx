import React from 'react'



export default function Footer(){
    return(
        <footer>
            <div>
            <img src="/images/icon1.png" alt='App-logo'/>
            <h3>Declarative</h3>
            <p> React makes it paintless to create interactive UI's</p>
            </div>
            <div>
            <h3>Components</h3>
            <img src='/images/icon2.png' alt='App-logo'/>
            <p> Built encapsulated components that manage their state</p>
            </div>  
            <div>
            <h3>Single-Way</h3>
            <img src='/images/icon3.png' alt='App-logo'/>
            <p> A set of inmutable values are passed to the component's</p>
            </div>
            <div>
            <h3>JSX</h3>
            <img src='/images/icon4.png' alt='App-logo'/>
            <p> Statically-typed, designed to run in modern browsers</p>
            </div>  
        </footer>
        
    )
}