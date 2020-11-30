import React from 'react';
import './Frontpage.css';
import Navbar from '../Navbar';

const reactLogo = '/images/react-logo.svg';

const Frontpage = () => {
  return (
    <div className='frontpage'>
      <Navbar />
      <div className='frontpage-main'>
        <h1>Say hello to ReactJS</h1>
        <h3>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h3>
        <button>Awesome!</button>
      </div>
      <img src={reactLogo} alt='React Logo' className='react react-logo1' />
      <img src={reactLogo} alt='React Logo' className='react react-logo2' />
      <img src={reactLogo} alt='React Logo' className='react react-logo3' />
      <img src={reactLogo} alt='React Logo' className='react react-logo4' />
      <img src={reactLogo} alt='React Logo' className='react react-logo5' />
      <img src={reactLogo} alt='React Logo' className='react react-logo6' />
    </div>
  )
}

export default Frontpage;
