import React from 'react';

const App = () => {
    return (
        <main>
            <section className='app-main'>
                <div>
                    <img src='/images/ironhack-logo.svg' alt='ironhack-logo'/>
                    <img src='/images/menu-top.svg' alt='menu-top' />
                </div>

                <div>
                    <h1>Say Hello to ReactJS</h1>

                    <p>Yo will learn how to use the mos popular frontend library and become a super Ninja developer.</p>

                    <button>
                        Awesome!
                    </button>
                </div>
            </section>
            <section>
                <div>
                    <img src='/images/icon1.png' alt='icon1'/>
                    <h3>Declarative</h3>
                    <p>React make it painless to create interactive UIs</p>
                </div>
                <div>
                    <img src='/images/icon2.png' alt='icon2'/>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state</p>
                </div>
                <div>
                    <img src='/images/icon3.png' alt='icon3'/>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the components</p>
                </div>
                <div>
                    <img src='/images/icon4.png' alt='icon4'/>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers</p>
                </div>
            </section>
        </main>
    );
};

export default App;