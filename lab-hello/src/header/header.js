import React from 'react'
import './header.css'

export default function header () {
  return (
    <div className='header'>
      <img
        alt='ironhack logo'
        className='logo'
        src='../images/ironhack-logo.svg'
      />
      <img alt='menu imagen' className='menu' src='../images/menu-top.svg' />
    </div>
  )
}
