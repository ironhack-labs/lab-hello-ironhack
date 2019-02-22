import React, { Component } from "react";
import "./app.css";

class Footer extends Component {
    i = 1
    listItems = [{title: "Declarative", text: "jlfihqild jqwhdqwhdkj jhwqdljkqwdiu kjbjkdglasgd", img: `./images/icon${this.i++}.png`},{title: "Components", text: "jlfihqild jqwhdqwhdkj jhwqdljkqwdiu kjbjkdglasgd",img: `./images/icon${this.i++}.png`}, {title: "Single Way", text: "jlfihqild jqwhdqwhdkj jhwqdljkqwdiu kjbjkdglasgd",img: `./images/icon${this.i++}.png`}, {title: "JSX", text: "jlfihqild jqwhdqwhdkj jhwqdljkqwdiu kjbjkdglasgd",img: `./images/icon${this.i++}.png`}]
    render() {
      return (
        <section>
        <ul className = "footerList">
            {this.listItems.map((el,i)=><li key = {i} className="listItem"><img src={el.img}></img><h3>{el.title}</h3><p>{el.text}</p></li>)}
        </ul>
    </section>
      );
    }
}

export default Footer;