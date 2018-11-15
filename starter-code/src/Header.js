import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className='nav'>
                    <img className='' src="images/ironhack-logo.svg" alt=""/>
                    <img className='' src="images/menu-top.svg" alt=""/>
                </div>
                <div className='App-header'>
                    <div className='title'>
                        <h1>Say Hello</h1>
                        <h1> to ReactJS</h1>
                        <p className='pr'>You will learn a frontend </p>
                        <p className='pr'>framework from scratch. to </p>
                        <p className='pr'>become an Ninka Developer</p>
                        <div className='boton'>
                            Awesome
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Header