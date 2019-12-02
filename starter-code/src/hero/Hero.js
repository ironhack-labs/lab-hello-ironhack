import React from "react";
import ReactLogo from "./reactLogo";

export default class Hero extends React.Component {
  render() {
    return (
      <section id="hero">
        
        <div className="react-logo-container">
            <ReactLogo top="50px" left="700px" size="350px"></ReactLogo>
            <ReactLogo top="350px" left="800px" size="250px"></ReactLogo>
            <ReactLogo top="500px" left="600px" size="250px"></ReactLogo>
            <ReactLogo top="300px" left="1050px" size="150px"></ReactLogo>
            <ReactLogo top="150px" left="1050px" size="150px"></ReactLogo>
            <ReactLogo top="450px" left="1050px" size="150px"></ReactLogo>

        </div>

        <div className="container">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn a Frontend framework from scratch, to become a NinKa
            Developer.
          </p>
          <button>Awesome!</button>
        </div>
      </section>
    );
  }
}
