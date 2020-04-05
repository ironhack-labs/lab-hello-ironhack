import React, {Component} from "react";

class Header extends Component {
    render() {
      const {img, title, description } = this.props;
      console.log(name);
      return (  
        <div class="header">
            <div class="imgs-top">
                <img class="img-logo" width="100" src="./images/ironhack-logo.svg"/> 
                <img class="img-menu" width="100" src="./images/menu-top.svg"/>
            </div>
            <div class="text-header">
                <h1> Say Hello to ReactJS </h1>
                <h5> You will learn a Frontend framework from scratch, to become an Ninka Developer </h5>   
            </div>
            <button> Awesome  </button>
        </div>
      );
    }
  }

  export default Header;

