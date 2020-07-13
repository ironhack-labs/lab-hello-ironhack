import React from 'react'

import Logo from '../../images/ironhack-logo.svg'
import Menu from '../../images/menu-top.svg'
import ReactLogo from '../../images/react-logo.svg'
import './Presentation.css'

const Presentation = () => {
    return (
        <section className='background'>
            <nav className='nav'>
                <img className='imgNav' src={Logo} alt='logo'/>
                <img className='imgNav' src={Menu} alt='menu-top'/>
            </nav>
            <article className='pr'>
                <div className='textPr'>
                    <h1 className='textWhite title'>Say hello to ReactJS</h1>
                    <h2 className='textWhite subtitle'>You will learn a Frontend framework from scratch, to become an Ninja Developer.</h2>
                    <button className='button'> Awesome!</button>
                </div>
                <div className='textPr'>
                    <img className='reactLogo' src={ReactLogo} alt='reactlogo'/>
                </div>
                
            </article>
            
        </section>
    )
}

export default Presentation