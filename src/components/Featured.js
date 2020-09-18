import React from 'react';
import "../App.css";

function Featured() {
  return (
    <section className='featured-section'>
      <div className='container'>
        <div className='row'>
          <div className='feature__box'>
            <figure>
              <img src='/images/icon1.png' className='feature__box-img'/>
            </figure>
            <div className='feature__box-info'>
              <h4 className='feature__box-heading'>Declarative</h4>
              <p className='feature__box-text'>React makes it painless to create interactive UIs.</p>
            </div>
          </div>
          <div className='feature__box'>
            <figure>
              <img src='/images/icon2.png' className='feature__box-img'/>
            </figure>
            <div className='feature__box-info'>
              <h4 className='feature__box-heading'>Components</h4>
              <p className='feature__box-text'>Build encapsulated components that manage their state.</p>
            </div>
          </div>
          <div className='feature__box'>
            <figure>
              <img src='/images/icon3.png' className='feature__box-img'/>
            </figure>
            <div className='feature__box-info'>
              <h4 className='feature__box-heading'>Single-Way</h4>
              <p className='feature__box-text'>A set of immutable values are passed to the component's.</p>
            </div>
          </div>
          <div className='feature__box'>
            <figure>
              <img src='/images/icon4.png' className='feature__box-img'/>
            </figure>
            <div className='feature__box-info'>
              <h4 className='feature__box-heading'>JSX</h4>
              <p className='feature__box-text'>Statically-typed, designed to run on modern browsers.</p>
            </div>
          </div>
        </div>  
      </div>
    </section>  
  )
}

export default Featured;