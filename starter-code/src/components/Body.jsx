import React from "react";
import BodyText from "./BodyText";
import BodyButton from "./BodyButton";


export default function Body(props){       
    return (
      <div className="BodyMe">
            <BodyText texte="Say Hello to ReactJS !" paragraphe="Lorem .... Lorem .... Lorem .... Lorem ...."/>
            <BodyButton link="https://www.atomisation.net" name="awesome" bgcolor="white" color="white"/>
      </div>
    );               
}