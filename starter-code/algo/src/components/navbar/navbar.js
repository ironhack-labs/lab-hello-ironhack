import React from 'react'
import './navbar.css'

const Navbar = props =>{

    return(
        <div className='navbar'>
            <figure>
                <img src='./images/ironhack-logo.svg'></img>
            </figure>
            <figure>
                <img src='./images/menu-top.svg'></img>
            </figure>

        </div>
    )
}
export default Navbar;