import React from 'react'
import './button.css'

export default function niceImage () {
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
