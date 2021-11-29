import React from 'react'
import logo from '../../images/ironhack-logo.svg'
import menuIcon from '../../images/menu-top.svg'
import './Header.css'

const Header = () => {
    return (
        <div className="background-main">
            <div className="logo-distribution">
                <img src={logo} alt={logo}></img>
                <img src={menuIcon} alt={menuIcon}></img>
            </div>
            <div className="info-distribution">
                <div className="title-container">
                    <h1 className="title">{'Say hello to ReactJS'}</h1>
                </div>
                <div className="description-container">
                    <p className="description">You will learn how to use the most popular frontent library, and become a super-ninja developer.</p>
                </div>
                <a className="button" href={"#"}>Awesome!</a>
            </div>
        </div>
    )
}



export default Header