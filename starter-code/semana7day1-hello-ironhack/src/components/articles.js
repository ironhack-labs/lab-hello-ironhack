import React from "react";



const Article = props => {
  return (
    <>
      <div className="articles">
        <img src={props.img}></img>
        <h5>{props.title}</h5>
        <p>{props.subtitle}</p>
      </div>
    </>
  );
};

export default Article;
