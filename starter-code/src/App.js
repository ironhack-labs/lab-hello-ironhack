import React from 'react'

const LittleBox = ({image, title, text, littleBoxClass="little-box"}) => {
  return (
    <div style={{margin: "30px"}}>
     <img src={image}/>
     <h2>{title}</h2>
     <p style={{fontSize: "18px"}}>{text}</p>
    </div>
  )
}


export const App = () => {
return (
  <div>
    <div style={{ backgroundColor: "#1f2634", height:"600px", paddingTop: "15px", paddingLeft: "50px", paddingRight: "30px", paddingBottom: "30px", backgroundImage: `url(require("images/react-logo.svg"))`}}>

      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <img src="../images/ironhack-logo.svg"/>
        <img src="../images/menu-top.svg"/>
      </div>

      <div style={{display: "flex", flexDirection: "column", width: "550px"}}>
        <h1 style={{color: "white", fontSize:"72px"}}> Say hello to ReactJS</h1>
        <h3 style={{color: "white"}}>You will learn a Frontend framework from scratch, to become a Ninka Developer.</h3>
        <button style={{display: "box", width: "200px", height:"70px"}}>Awesome!</button>
      </div>

    </div>

    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", margin: "50px"}}>
      <LittleBox image="../images/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs"/>
      <LittleBox image="../images/icon2.png" title="Components" text="Build encapsulated components that manage their state."/>
      <LittleBox image="../images/icon3.png" title="Single-Way" text="A set of immutable values are passed to the components's."/>
      <LittleBox image="../images/icon4.png" title="JSX" text="Statically-typed, designed to run on modern browsers."/>
    </div>

  </div>

);

}