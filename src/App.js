import React from "react";
import "./App.css";


class App extends React.Component {
    render() {
        return (
    <div>
        <div className='intro1'>
            <nav className='nav'>
                <img src='/images/ironhack-logo.svg' />
                <img src='/images/menu-top.svg' />
            </nav>

            <div>
                <h1 className='textos'>Say hello to ReactJS</h1>
                <p className='textos'>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
            </div>
            <div>
                <button className='boton'>Awesome</button>
            </div>
        </div>
        <div className="segundo div">
            <div className='contenedorImagenes'>
            <img src="/images/icon1.png" alt=""/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className='contenedorImagenes'>
            <img src="/images/icon2.png" alt=""/>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className='contenedorImagenes'>
            <img src="/images/icon3.png" alt=""/>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className='contenedorImagenes'>
            <img src="/images/icon4.png" alt=""/>
            <h3>JSX</h3>
            <p>Statically-typed. Designed to run on modern browsers.</p>
            </div>
        </div>
        </div>
        )}
}


export default App;