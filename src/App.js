import React from 'react';
import HeaderComponent from './HeaderComponent';
import './App.css';
import BodyComponent from './BodyComponent';


function App() {
    return (
        <div className='App'>
            <HeaderComponent />
                <div className="body__description"> 
                    <BodyComponent image="./images/icon1.png" title="Declarative" description="React makes it painless to create interactive UIs." />
                    <BodyComponent image="./images/icon2.png" title="Components" description="A set of immutable values are passed to the component's."/>
                    <BodyComponent image="./images/icon3.png" title="Single-Way" description="A set of immutable values are passed to the component's."/>
                    <BodyComponent image="./images/icon4.png" title="JSX" description="Statically-typed designed to run on modern browsers." />
                </div>       
        </div>
    )

}

export default App;