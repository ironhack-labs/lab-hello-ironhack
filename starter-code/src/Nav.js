import React from 'react';


function Nav(props) {
    return (
    <div className="App">
        <nav id="navbar">
            <img src={props.src1}/>
            <img src={props.src2}/>
        </nav>
        <div className ="navBody">
            <h1>Say hello to ReactJS</h1>
            <h2>You will learn a Frontend framework from scratch, to become a Ninja Developer.</h2>
            <button>Awesome!</button>
        </div>
    </div>
    )
}

export default Nav;
