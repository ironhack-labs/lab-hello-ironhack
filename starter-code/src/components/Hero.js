import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <section class="herocont">
        <div class="titletext">
        <h1>Say Hello to ReactJS</h1>
        </div>
        <div class="detailcont">
        <p class="detailtext">You will learn a front-end framework from scratch, to become a Ninka Developer.</p>
        </div>
        <div class="buttoncont">
        <button>Awesome!</button>
        </div>
        <img  class="logor" src="images/react-logo.svg" />
      </section>
    );
  }
}

export default Hero