import React from 'react'
import FootBlock from './FootBlock'
import icon1 from '../public/images/icon1.png'
import icon2 from '../public/images/icon2.png'
import icon3 from '../public/images/icon3.png'
import icon4 from '../public/images/icon4.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='appFooterContainer'>
            <footer className='appFooter'>
                <FootBlock URL={icon1} title='Declarative' paraf='React makes it painless to create interactive UIs.'></FootBlock>
                <FootBlock URL={icon2} title='Components' paraf='Build encapsulated components that manage their state.'></FootBlock>
                <FootBlock URL={icon3} title='Single-Way' paraf="A set of immutable values are passed to the component's"></FootBlock>
                <FootBlock URL={icon4} title='JSX' paraf='Statically-typed, designed to run on modern browsers.'></FootBlock>
            </footer>
        </div>
    );
};

export default Footer;