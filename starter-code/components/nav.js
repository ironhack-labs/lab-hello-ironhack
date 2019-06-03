import React from 'react'

const Nav = props =>
    <div className='nav'>
        <a href='/'><img src={props.logo} /></a>
        <img src={props.menu} />
    </div>


export default Nav