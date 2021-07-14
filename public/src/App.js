import React from "react";
import "./App.css";

const App = () => {
    return (  
        <div className="total">
            <div>
                 <h1 id="title">Say hello to <br/>ReactJS</h1>                                
                 <p>You will learn how to use <br/> the most popular frontend library, <br/>and become the Super Ninja developer.</p>
                <h3>Declarative</h3>
                <p>React makes it <br/>
                painless to creat <br/>
                interactive UIs.</p>
                <h3>Components</h3>
                <p>Build encapsulated <br/>
                components that <br/>
                manage their state.</p>
                <h3>Single-way</h3>
                <p>A set of immutable <br/>
                values are passed to <br/>
                the component's.</p>
                <h3>JSX</h3>
                <p>Statically-typed, <br/>
                designed to run on <br/>
                modern browsers.</p>
            </div>
        </div>
    );
}

export default App;
