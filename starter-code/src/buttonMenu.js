import React, { Component } from "react";


export const BottomMenu = ({url, title, text}) => {
  return (
    <div>
      <img src={url}></img>
      <h1>{title}</h1>
      <h4>{text}</h4>
    </div>
  )
}