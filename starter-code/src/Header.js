import React from 'react'

const Header = props => {
    return (
        <header>
            <img src={props.image} alt={props.imageTitle} />
            <button><img src="./images/menu-top.svg" alt="menu" /></button>
        </header>
    );
};

export default Header