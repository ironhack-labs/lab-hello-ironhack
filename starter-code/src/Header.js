import React from 'react'

const Header = props => {
    return (
        <header className="bg-main">
            <img src={props.image} alt={props.imageTitle} />
            <button><img src="./images/menu-top.svg" alt="menu" /></button>
        </header>
    );
};

export default Header