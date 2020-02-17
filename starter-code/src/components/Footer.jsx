import React from "react";
import FooterButton from "./FooterButton";

export default function Footer(props){       
    return (
      <div className="FooterMe">      
            <FooterButton  imageF="./images/icon1.png" title="Declarative" description="React makes it painless ..."/>
            <FooterButton  imageF="./images/icon2.png" title="Components" description="Build encaplsulated apps" />
            <FooterButton  imageF="./images/icon3.png" title="Single-Way" description="A set of immutable ..."/>             
            <FooterButton  imageF="./images/icon4.png" title="JSX" description="Statically typed ..."/>
      </div>
    );               
}

