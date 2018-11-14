import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <div className='fondo'>
                    <div>
                    <img className='leftImage' src="images/ironhack-logo.svg" alt=""/>
                    <img className='rigthImage' src="images/menu-top.svg" alt=""/>
                   </div>
                <div>
                    <h1>Say Hello to ReactJS</h1>
                    <p>You will learn a frontend framework from scratch. to become an Ninka Developer</p>
                    <div className='boton'>

                    </div>
                </div>

            </div>

        )
    }
}

export default Header