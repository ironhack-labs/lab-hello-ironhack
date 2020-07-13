import React from 'react'

//CSS
import './nav.css'

//images
import logo from '../../public/images/images/ironhack-logo.svg'
import burger from '../../public/images/images/menu-top.svg'



const nav = () => {

    return (
        <nav>
            <img src={logo} />
            <img src={burger}/>
        </nav>
    )
}

export default nav