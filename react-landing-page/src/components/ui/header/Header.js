import React from 'react'
import './Header.css'
import ironhack_logo from '../../../images/ironhack-logo.svg'
import menu_top from '../../../images/menu-top.svg'
import react_logo from '../../../images/react-logo.svg'


const Header = () => {

    return (
        <header>
            <div className="container">
                <nav>
                    <figure>
                        <img src={ironhack_logo} alt="logo"></img>
                    </figure>
                    <figure >
                        <img src={menu_top} alt="menu-icon"></img>
                    </figure>
                </nav>
                <section className="row justify-content-between">
                    <div className="col-sm-6 text-container">
                        <h1>Say hello to ReactJS</h1>
                        <p>You will learn a Frontend framework from scratch, to became a Ninka Developer.</p>
                        <button className="col-sm-4 btn btn-lg btn-light">Awesome!</button>
                    </div>
                    <div className="col-sm-6 small-react-logos-container flex-column align-items-end">
                        <figure><img className="react-logo-small" src={react_logo} alt="react-logo"></img></figure>
                        <figure><img className="react-logo-small" src={react_logo} alt="react-logo"></img></figure>
                        <figure><img className="react-logo-small" src={react_logo} alt="react-logo"></img></figure>
                    </div>
                    <figure><img className="react-logo-big-1" src={react_logo} alt="react-logo"></img></figure>
                    <figure><img className="react-logo-big-2" src={react_logo} alt="react-logo"></img></figure>
                    <figure><img className="react-logo-big-3" src={react_logo} alt="react-logo"></img></figure>
                </section>
            </div>
        </header>
    )
}

export default Header