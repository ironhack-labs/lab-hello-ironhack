import React from "react";

const header = (props) => {
  return (
    <div className="bannerbg">
      <div className = "navBar">
        <div><img src="/images/ironhack-logo.svg" alt="logo" /></div>
        <div><img src="/images/menu-top.svg" alt="logo" /></div>
       </div> 
       <div className="banner">
        <div><h1>Say Hello to ReactJS</h1></div>
        <div><p className="tagline">You will learn a Frontend farmework from scratch to become a Ninka Developer</p></div>
        <div><button>Awesome!</button></div>
       </div>
    </div>
  );
};
export default header;
