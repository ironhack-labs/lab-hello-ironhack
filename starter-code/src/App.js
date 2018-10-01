import React, {Component} from 'react'
import './App.css';

class App extends Component {
    render () {
        return (
            <div className='App'>
                <header>
                <img alt='logo' src='images/ironhack-logo.svg' />
                <img alt='menu' src='images/menu-top.svg' />
                </header>

            <div className='react'>
                <img src='images/react-logo.svg' alt='logo' />
            </div>

            <div className='body' >
                <h1>Say Hello To ReactJs</h1>

                <p>
                You will learn a Frontend framework from scratch
                </p>

                <button> Awesome! </button>
            </div>

            <div className='logos'>

                <div>
                <img src='images/icon1.png' alt='icon1' />
                <h3>Declarative</h3>
                <p>blablabla</p>
                </div>

                <div>
                <img src='images/icon2.png' alt='icon2'/>
                <h3>Components</h3>
                <p>blablabla</p>
                </div>

                <div>
                <img src='images/icon3.png' alt='icon3'/>
                <h3>Single-Way</h3>
                <p>blablabla</p>
                </div>

                <div>
                <img src='images/icon4.png' alt='icon4'/>
                <h3>JSX</h3>
                <p>blablabla</p>
                </div>
            </div>



        </div>

        )
    }
}


export default App;