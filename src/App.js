import React from 'react'
import "./App.css";
/* import ihLogo from './' */
/* import menuTop fromn 'images\menu-top.svg' */


const app = () => {
    return (
       <div>
        <nav> 
            <img className="ihlogo"src="images\ironhack-logo.svg" alt="aironjak"/>
            <img className="barritas"src="images\menu-top.svg" alt="Barritas"/>
        </nav>
        <main>
            <div className="h1div">
                <h1>Say hello to ReactJS</h1>
            </div>
            <div className="textodiv">
                <p>You will learn how to use the msot popular frontend library and become a super Ninja developer</p>
            </div>
            <div className="botondiv">
                <a href="#">Awesome!</a>
             </div>
        </main>
        <section>
            <div className="parent">
                <div className="child">
                    <img src="images\icon1.png" alt ="declarativeimg"/>
                    <h2>Declarative</h2>
                    <div className="textdiv">
                    <p>React makes it painless to create interactive UIs</p>
                    </div>
                </div>
                <div className="child">
                    <img src="images\icon2.png" alt ="Components"/>
                    <h2>Components</h2>
                    <div className="textdiv">
                        <p>Build encapsulated components that manage their state</p>
                    </div>
                
                </div>
                <div className="child">
                    <img src="images\icon3.png" alt ="Single-Way"/>
                    <h2>Single-way</h2>
                    <div className="textdiv">
                        <p>a Set of immtable values are passed to the component's</p>
                    </div>
                </div>
                <div className="child">
                    <img src="images\icon4.png" alt ="JSX"/>
                    <h2>JSX</h2>
                    <div className="textdiv">
                        <p>Statically-typed, designed to run on modern browsers</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default app
