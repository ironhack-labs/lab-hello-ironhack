import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const backgroundImg = "./images/react-logo.svg";
const backgroundStyle = {
  backgroundImage: `url(${backgroundImg})`,
};

const element = (
    <div className="container" style={backgroundStyle}>
        <nav>
        <img src={'./images/ironhack-logo.svg'} alt="Ironhack Logo"/>
        <img src={'./images/menu-top.svg'} alt="React Logo"/>
        </nav>
        <h1>Say hello to ReactJS</h1>
        <p>
            You will learn a new framework from scratch to become a Ninka Developer
        </p>
        <button>Awesome!</button>
        <footer>
            <img src={'./images/icon1.png'} alt="Icon1"/>
            <img src={'./images/icon2.png'}  alt="Icon2"/>
            <img src={'./images/icon3.png'}  alt="Icon3"/>
            <img src={'./images/icon4.png'}  alt="Icon4"/>
        </footer>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);