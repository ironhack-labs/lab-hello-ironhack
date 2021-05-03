import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

function Card() {
  return (
    <div className="Landing">
      <div className='first-section'>
        <nav>
          <img className="logo" src="../public/images/ironhack-logo.svg" alt="ironhack-logo"></img>
          <img className='topmenu' src='../public/images/menu-top.svg' alt='menu-top'></img>
        </nav>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and beacome a super Ninja developer</p>
        <button className='button'>Awesome!</button>
      </div>

      <div className="cards">
        <Card  cardImage='' cardTitle='' cardDescription=''/>
        <Card  cardImage='' cardTitle='' cardDescription=''/>
        <Card  cardImage='' cardTitle='' cardDescription=''/>
        <Card  cardImage='' cardTitle='' cardDescription=''/>
      </div>
    </div>
  );
}
