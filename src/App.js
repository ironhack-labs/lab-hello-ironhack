import React from 'react';
import HeaderComponent from './HeaderComponent';
import './App.css';
import BodyComponent from './BodyComponent';


function App() {
    return (
        <div className='App'>
            <HeaderComponent />
                <BodyComponent>
                    <div>
                        <img src="./image/icon1.png"/>
                    </div>


                <BodyComponent/>
        </div>
    )

}

export default App;