import React from "react";

export default function MenuToggler({ url, alt }) {
  return (
    <a href="">
      <img src={url} alt={alt} id="menu" />
    </a>
  );
}
