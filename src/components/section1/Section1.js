import React from "react";
import ReactDOM from 'react-dom';



const Section1 = () => {
    return (
        <section className="section1">
            <div>
                <header className="navbar">
                    <img src="/images/ironhack-logo.svg" className="logoLeft" />
                    <img src="/images/menu-top.svg" className="logoRight" />
                </header>
            </div>
            <div className="landingPage">
                <h1>Say hello to <br/> ReactJS</h1>
                <p>You will learn how to use <br/> the most popular frontend library, <br/> and becomer a super Ninja Developer.</p>
                <button>Awesome!</button>
            </div>
        </section>
    )
}

export default Section1;