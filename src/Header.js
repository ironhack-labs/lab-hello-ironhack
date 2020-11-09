import React, { Component } from "react";
import "./App.css";

const Header = () =>{
    return <div className="wrapper">
                <div className="container p-3">
                    <div className="row d-flex flexTop">
                        <img src="../images/ironhack-logo.svg" alt=""/>
                        <img src="../images/menu-top.svg" className="float-right" alt=""/>
                    </div>
                        <div className="row d-flex">
                            <div className="col-8"><h1 className="mainh1">Say Hello to ReactJS</h1></div>
                            <div className="col-6"><p className="mainp">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p></div>
                            <div className="col-12"><button type="button" className="btn btn-primary btn-awe">Awesome!</button></div>
                        </div>

                </div>
           </div>
}

export default Header;

