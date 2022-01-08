import React from 'react'
import ReactDOM from 'react-dom';

const Section1 = () => {
    return (
    <section className="section1">
        <div className='menu'>
            <a href='#'><img src='./images/ironhack-logo.svg'/></a>
            <a href='#'><img src='./images/menu-top.svg'/></a>
        </div>
        <div className='text-section1'>
            <h1>Say hello to ReactJS</h1>
            <p>
                You will learn how to use the most popular frontend library, and become a super Ninja developer. 
            </p>
            <button className='btn-awesome'>Awesome!</button>
        </div>
        <div className='logoReact-section1'>
            <img src='./images/react-logo.svg' className='img-maior'/>
            <img src='./images/react-logo.svg' className='img-media'/>
            <img src='./images/react-logo.svg' className='img-menor'/>
        </div>
        <div className='logoReact-section1-a'>
            <img src='./images/react-logo.svg' className='img-menor-a'/>
            <img src='./images/react-logo.svg' className='img-menor-a'/>
            <img src='./images/react-logo.svg' className='img-menor-a'/>
        </div>
        
        
    </section>
    )
}

export default Section1; 