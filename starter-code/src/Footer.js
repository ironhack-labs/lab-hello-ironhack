import React, {Component} from 'react'
import './App.css';

class Footer extends Component{
    render(){
        return(
            <div className='container'>
                <div className='divFooter'>
                    <img src="images/icon1.png" alt=""/>
                    <h2>Declarative</h2>
                    <p>React makes it
                    paintless to create
                    interactive UI</p>
                </div>
                <div className='divFooter'>
                    <img src="images/icon2.png" alt=""/>
                    <h2>Components</h2>
                    <p>Build encapsulated
                    components that
                    manage their state</p>
                </div>
                <div className='divFooter'>
                    <img src="images/icon3.png" alt=""/>
                    <h2>Single-Way</h2>
                    <p>A set of immutable
                        values are passed to
                        the component's</p>
                </div>
                <div className='divFooter'>
                    <img src="images/icon4.png" alt=""/>
                    <h2>JSX</h2>
                    <p>Statically-typed
                    designed to run on
                    modern browsers</p>
                </div>
            </div>
        )
    }
}

export default Footer