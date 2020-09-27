import React from 'react'

function SectionOne() {
    return (
        <div>
            <nav class="navbar">
                <a class="logo" href="#">
                <img src="./images/ironhack-logo.svg" width="60" height="60" alt="ironhack" /> 
                </a>
                <img src="./images/menu-top.svg"  width="30" height="30" alt="menu" />
            </nav>
            <div class="App-header">
                <h1  style={{margin: '0px'}}>Say Hello to <br />   React Js </h1>
                <p> You will learn a Frontend <br />
                framework from scratch, to <br />
                become a Ninja Developer
                </p>
                <button type="button"  style={{ backgroundColor: "white", color: "#1E2333", borderStyle: "none", width: '100px', padding: '10px', borderRadius: '10px'}} disabled>Awesome!</button>
            </div>
        </div>
    )
}

export default SectionOne

