import React from "react";


const Card = ({title, text, imgSrc, cardBlock}) => {
  return (
    <div className={cardBlock}>
      <img src={imgSrc}/>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export const Content = ({contBlock}) => {
  return (
    <div className="contBlock">
      <Card cardBlock="cardBlock" imgSrc= "./images/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs."/>
      <Card cardBlock="cardBlock" imgSrc= "./images/icon2.png" title="Declarative" text="React makes it painless to create interactive UIs."/>
      <Card cardBlock="cardBlock" imgSrc= "./images/icon3.png" title="Declarative" text="React makes it painless to create interactive UIs."/>
      <Card cardBlock="cardBlock" imgSrc= "./images/icon4.png" title="Declarative" text="React makes it painless to create interactive UIs."/>
    </div>
)}

