import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='appHeaderContainer'>
            <header className='appHeader'>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn a Frontend framework from scratch, to become a Ninka Developer.</p>
                <button type='button'>Awesome!</button>
            </header>
        </div>
    );
};

export default Header;