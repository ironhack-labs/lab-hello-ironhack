import React from 'react';
import '../app.css'

const Header = () => (
    <main>
        <section className="container">
            <div className="top">
                <img src='/images/ironhack-logo.svg'></img>
                <img src='/images/menu-top.svg'></img>
            </div>

            <div>
                <h1>Say hello to ReactJS</h1>
                    <p>
                    You will learn how to use
                    the most popular frontend library,
                    and become a super Ninja developer
                    </p>                    
                <button>Awesome!</button>
            </div>
        </section>
    </main>
);


export default Header;