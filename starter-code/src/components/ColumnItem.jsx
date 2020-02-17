import React from "react";

export default function ColumnItem(props) {
  return (
    <article>
      <img src={props.img} alt="" />
      {props.children}
    </article>
  );
}
