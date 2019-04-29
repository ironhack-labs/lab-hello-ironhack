import React, { Component } from 'react'
import Card from "./Card"

export default class CardContainer extends Component {
  
  Cards = [
      {
        img: "/images/icon1.png",
        title: "Declarative",
        par: "React makes it podp pioud p[oipd  dodpk;dlkd;lkd"
      },
      {
        img: "/images/icon2.png",
        title: "Components",
        par: "React makes it podp pioud p[oipd  dodpk;dlkd;lkd"
      },
      {
        img: "/images/icon3.png",
        title: "Single-Way",
        par: "Build ondk, skjskjs jkjhdihkd jghkdn,mhd lkhdbd"
      },
      {
        img: "/images/icon4.png",
        title: "JSX",
        par: "khdkjkd ;khjd;khd  igduygjhbds siugkbwiugd dudjj"
      }
    ]
  
  render() {

    let CC = this.Cards.map((el, index) => {return <Card key={index} img={el.img} title={el.title} par={el.par} />})

    return (
      <div className="CardContainer">
       {CC}
      </div>
    )
  }
}
