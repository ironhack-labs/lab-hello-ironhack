import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


const landingPage = (
  <main>
    
    <nav>
      <img src="../images/ironhack-logo.svg" alt="Ironhack Logo"/>
      <img src="../images/menu-top.svg" alt="menue"/>
    </nav>

    <article>
      <h1>Say hello to <br/>ReactJS</h1>
      <p>You will learn a Frontend <br/><s>framework</s> library from scratch, to <br/>become an Nin<s>k</s>ja Developer.</p>
      <button>Awesome!</button>
    </article>

    <div>
      <img class="logo" id="react-logo1" src="../images/react-logo.svg" alt="React Logo"/>
      <img class="logo" id="react-logo2" src="../images/react-logo.svg" alt="React Logo"/>
      <img class="logo" id="react-logo3" src="../images/react-logo.svg" alt="React Logo"/>
      <img class="logo" id="react-logo4" src="../images/react-logo.svg" alt="React Logo"/>
      <img class="logo" id="react-logo5" src="../images/react-logo.svg" alt="React Logo"/>
      <img class="logo" id="react-logo6" src="../images/react-logo.svg" alt="React Logo"/>
    </div>

  </main>
);

ReactDOM.render(
  landingPage, 
  document.getElementById('root')
)