import React, { Component } from 'react'
import Nav from './Nav'
import HeadInfo from './HeadInfo'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Nav />
                <HeadInfo />
            </div>
        )
    }
}

export default Header
