import React from "react";
import "./Header.css";
import Button from "../button/Button"

const Header = () => {
    return (
      
        <header className="header">
          <section className="navbar">
            <img src="./img/ironhack-logo.svg" alt="ironhack logo" />
            <img src="./img/menu-top.svg" alt="ironhack menu" />
          </section>
          <section className="title">
            <article>
              <h1>Say hello to ReactJS</h1>
              <p>You will learn a frontend framework from scratch to become an Ninja Developer</p>
              <Button link="/" />
            </article>
          </section>
        </header>
    
    );
};

export default Header;
