import React from "react";
import Nav from "./Nav";
import Title from "./Title";
import Button from "./Button";

export default function Hero() {
  return (
    <React.Fragment>
      <Nav />
      <div className="flex-fill d-flex flex-column justify-content-center align-items-start" style={{ width: "50%" }}>
        <Title title="Say Hello to ReactJS" className="align-self-center">
          You'll learn a frontend framework from scratch, to become a ninja developer.
        </Title>
        <Button link="https://www.google.com">Awesome</Button>
      </div>
    </React.Fragment>
  );
}
