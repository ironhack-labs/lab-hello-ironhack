import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';



const myStyle = {
    color: 'white',
}



const element = (
    <div>
        <nav>
            <img className="navImg1" src={"../images/ironhack-logo.svg"}/>
            <img className="navImg2" src={"../images/menu-top.svg"}/>
        </nav>
        <div>
            <h1 style = {myStyle}>Say Hello to ReactJS</h1>
            <p id="parrafo" style={myStyle}>You will learn a Frontend<br/>
            framework from scratch, to<br/>
            become a Ninja Developer</p>
            <button id="button">Awesome!</button>
        </div>
        <div>
            <div>
                <img src={"../images/icon1.png"}/>
            </div>
            <div>
                <img src={"../images/icon2.png"}/>
            </div>
            <div>
                <img src={"../images/icon3.png"}/>
            </div>
            <div>
                <img src={"../images/icon4.png"}/>
            </div>
        </div>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);