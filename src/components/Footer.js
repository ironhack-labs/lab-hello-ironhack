import React from 'react'
import './styles/Footer.css'
import Card from './Card'


const Footer = () => {
    return (
        <div className="Footer">
        <Card img='../../public/images/icon1.png' title='Declarative' text='react make it painless to create interactive UIs' />
        <Card img='../../public/images/icon2.png' title='Components' text='build encapsulated components that manage their state' />
        <Card img='../../public/images/icon3.png' title='Single-way' text='a set of inmutable values are passed to the components' />
        <Card img='../../public/images/icon4.png' title='JSX' text='statically typed designd to run on modern browsers' />
        </div>
    )
}

export default Footer