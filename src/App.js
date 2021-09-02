import React from 'react';
import './App.css';


const App = () => {
    return(
        <main>
            <div className="Topo">
                <img src="/images/ironhack-logo.svg" alt='logo iron' />
                <img src = "/images/menu-top.svg" alt="menu" />
            </div>

            <div className="Text">
                <h1>Say heloo to ReactJs</h1>

                <h2>You will learn how to use the most popular frontend library and become a super Ninja developer</h2>

                <button className="Button">Awesome!</button>
            </div>
            
            <div className="icons">
                <section>
                 <img src="/images/icon1.png" />
                 <h3>Declarative</h3>
                 <p>React makes it painless to create itercative UIs</p>
                </section>

                <section>
                 <img src="/images/icon2.png" />
                 <h3>Components</h3>
                 <p>Build encapsulated components that manage their state</p>
                 
                </section>
                
                <section>
                 <img src="/images/icon3.png" />
                 <h3>Single-Way</h3>
                 <p>A set of immutable values are passed to the components</p>
                 
                </section>

                <section>
                 <img src="/images/icon4.png" />
                 <h3>JSX</h3>
                 <p>Statically-typed, designed to run on modern browsers</p>
                 
                </section>
                
            </div>
        
        </main>
        
        
        

        
    );
}



export default App;