import React from "react";

const bg_color = { backgroundColor: "rgb(31,37,53)" }

const header = (
    <header style={bg_color}>

        <nav className='navbar' style={bg_color}>
            <img width='40' height='40' style={{ margin: '0 5px 0 34px' }} src="./images/ironhack-logo.svg" alt="" />
            <img width='30' height='40' style={{ float: "right", margin: '0 34px 0 5px' }} src="./images/menu-top.svg" alt="" />
        </nav>

        <div style={{
            color: "white",
            padding: "120px 0px 50px 50px"
        }}>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn a Frontend</p>
            <p>framework from scratch, to</p>
            <p>become an Ninka Developer</p>

            <button className='btn btn-light' style={{
                backgroundColor: "white",
                color: 'rgb(31,37,53)',
                padding: "15px"
            }}>Awesome!</button>
        </div>
    </header>
);

module.exports = header;