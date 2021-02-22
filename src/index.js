import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function content() {
    return (
      // div is eine compnente ele müssen alle in eie fiv 
      <div className="container">
       <header className ="header">
       <iframe height="100" width="100" src="/images/ironhack-logo.svg" ></iframe>
       <iframe height="100" width="100" src="/images/menu-top.svg" ></iframe>
       </header>
       <h1>Say Hello to ReactJs</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sit dignissimos dolorum similique ab maiores.</p>
       <button className="btn">Awsome</button>
       <section className="showcase">
       <img src="/images/icon1.png" alt=""/>
       <img src="/images/icon2.png" alt=""/>
       <img src="/images/icon3.png" alt=""/>
       <img src="/images/icon4.png" alt=""/>
       </section>
      </div>
  
    );
  }


ReactDOM.render(
 content(),
  document.getElementById('root')
);

