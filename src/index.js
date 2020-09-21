import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';




const nav = (
    <div>
<nav className="navWrapper">
 <img src="/images/ironhack-logo.svg" alt="Logo Ironhack"/>
 <img src="/images/menu-top.svg" alt="Image Menu"/>
</nav>
</div>
)

const header =(
<div className="headerDiv">

{nav}

<div>
<section>
<h1 className="heading">Say Hello to ReactJS</h1>
<p className="headingText"> You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
<button>Awesome!</button>
</section>
    </div>

    </div>
)

const informationSection = (

    <div>
    {header}

    <div className="informationSectionDiv">
<div> <img src="/images/icon1.png" alt="Ironhack Stuffi 1"/>
<h2>Declarative</h2> 
<p></p>
</div>

<div> <img src="/images/icon2.png" alt="Ironhack Stuffi 2"/>
<h2></h2> 
<p></p>
</div>
<div> <img src="/images/icon3.png" alt="Ironhack Stuffi 3"/>
<h2></h2> 
<p></p>
</div>
<div> <img src="/images/icon4.png" alt="Ironhack Stuffi 4"/>
<h2></h2> 
<p></p>
</div>


    </div>

    </div>
)


ReactDOM.render(
    informationSection,
    document.getElementById('root')
);
