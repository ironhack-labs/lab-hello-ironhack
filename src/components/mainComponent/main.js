import React from 'react';
// import menuLogo from '../../images/menu-top.svg';
// import logo from '../../images/ironhack-logo.svg';
import  '../mainComponent/main.css';

class Main extends React.Component {
    render() {
return (
    <div >
      <div className="header">
      <div className="nav">
      <img src='/images/ironhack-logo.svg' className="top-left" alt="logo" />
        <img className="menu-top-right" src='/images/menu-top.svg'  alt="logo" />
      </div>
     <div className="welcome-content">
     <h1>Say hello to ReactJS</h1>
     <p>You will learn a Frontend framework from scratch, to become an Ninka Developer</p>
     <button>Awesome!</button>
     </div>
       
      </div>
      <div className="mainContent">
         <div className="details"><img src= "/images/icon1.png"/>
         <div className="det">
           <h3>Declarative</h3>
           <p>React makes it painless to create interactive UIs.</p>
         </div>
         </div>
         <div className="details"><img src= "/images/icon2.png"/>
         <div className="det">
           <h3>Components</h3>
           <p>Build encapsulated components that manage their state.</p>
         </div>
         </div>
         <div className="details"><img src= "/images/icon3.png"/>
         <div className="det">
           <h3>Single-Way</h3>
           <p>A set of immutable values are passed to the components.</p>
         </div>
         </div>
         <div className="details"><img src= "/images/icon4.png"/>
         <div className="det">
           <h3>JSX</h3>
           <p>Statically-typed designed to run on modern browsers.</p>
         </div>
         </div>
      </div>
    </div>
   
);
    }
}
export default Main;