import React from 'react'

const Header = props =>
    // const { title, description, buttonName } = props
    <header className='header'>
        <div className='left'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <a href='#'>{props.buttonName}</a>
        </div>
    </header>



export default Header