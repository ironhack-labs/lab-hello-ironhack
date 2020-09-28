import React from 'react'
import './App.css'

const Button = () => {

    return (
      <section className='main'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <h1>Say hello to ReactJS</h1>
              <p>
                You will learn how to use <br /> the most popular frontend library,<br />and
                become a super Ninja developer.
              </p>
              <button className='btn-ligth'>Awesome!</button>
            </div>
          </div>
        </div>
      </section>
    );
}




export default Button;
