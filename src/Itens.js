import React from 'react';

function Itens (){
    return (
        <section id = 'itens'>
            <div>
                <img src = '../images/icon1.png'></img>
                <h2>Declarative</h2>
                <p>
                    React makes it <br></br>
                    painless to create <br></br>
                    interactive UIs.
                </p>
            </div>
            <div>
                <img src = '../images/icon2.png'></img>
                <h2>Components</h2>
                <p>
                    Build encapsulated <br></br>
                    components that <br></br>
                    manage their state.
                </p>
            </div>
            <div>
                <img src = '../images/icon3.png'></img>
                <h2>Single-Way</h2>
                <p>
                    A set of immutable <br></br>
                    values are passed to <br></br>
                    the component's. 
                </p>
            </div>
            <div>
                <img src = '../images/icon4.png'></img>
                <h2>JSX</h2>
                <p>
                    Statically-typed <br></br>
                    designed to run on<br></br>
                    modern browsers.
                </p>
            </div>
        </section>
        
    )
}

export default Itens