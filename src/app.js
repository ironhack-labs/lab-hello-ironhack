import React from 'react'; // <== import React
import './App.css'; 

const App = () => {
    return <div className="appMain">
        
            <div className="topSection">
                <nav>
                    <img src="/images/ironhack-logo.svg"/>
                    <img src="/images/menu-top.svg"/>
                </nav>
                <h1>Say Hello to ReactJS</h1>
                <h3>You will learn how to use <br></br>
                the most popular frontend library, <br></br>
                and become a super ninja developer</h3>

                <button>Awesome!</button>
            </div>
            <div className="bottomSection">
            <ul>
                <li>
                    <img src="/images/icon1.png"/>
                    <h3>Declarative</h3>
                    <p>React makes it<br></br>
                        painless to create<br></br>
                        interactive UIs.</p>
                </li>
                <li>
                    <img src="/images/icon2.png"/>
                    <h3>Components</h3>
                    <p>Build encapsulated<br></br>
                        contents that<br></br>
                        manage their state.</p>
                </li>
                <li>
                    <img src="/images/icon3.png"/>
                    <h3>Single-Way</h3>
                    <p>A set of immutable<br></br>
                        values are passed to<br></br>
                        the component's.</p>
                </li>
                <li>
                    <img src="/images/icon4.png"/>
                    <h3>JSX</h3>
                    <p>Statically-typed.<br></br>
                        designed to run on<br></br>
                        modern browsers.</p>
                </li>
            </ul>    
                    

            </div>

        </div>;
};

export default App;