import React, { Component } from "react";
import "./App.css";
import {
  Jumbotron, CardGroup, Button, Card, CardImg, CardBody, CardTitle, CardText

} from 'reactstrap';


class App extends Component {
  render() {

    const ironImage = "/images/ironhack-logo.svg"

    const data = [

      {
        image: "/images/icon1.png",
        text: "React makes it painless to create interactive UI.",
        title: "Declarative"
      },
      {
        image: "/images/icon2.png",
        text: "Build encapsulated components that manage their state.",
        title: "Components"
      },
      {
        image: "/images/icon3.png",
        text: "A set of immutable values...",
        title: "Single-Way"
      },
      {
        image: "/images/icon4.png",
        text: "Statically typed...",
        title: "JSX"
      },

    ]

    const user = {
      firstName: 'Fairouz',
      lastName: 'West',
    };

    return (
      <div className="App">
        <Jumbotron >
          <div className="darkB">
            <div className="container">
              <img src={ironImage} width="75" height="75" />
              <h1 className="display-3"> Say hello to ReactJS  </h1>


              <p className="lead">You will learn a Frontend framework from scratch, to become an {user.firstName} Developer.
            </p>
              <hr className="my-2" />
              <p className="lead">
              </p>


              <Button className="button" color="primary" size="lg">Awesome!</Button>
            </div>
          </div>

        </Jumbotron>


        <CardGroup>

          {data.map(element => {
            return <Card body className="text-center">
              <CardBody>
                <img src={element.image} width="100" height="100" />
                <CardTitle>{element.title}</CardTitle>
                <CardText>
                  <small className="text-muted">{element.text}</small>
                </CardText>
              </CardBody>
            </Card>
          })}

        </CardGroup>

      </div>

    );
  }
}

export default App;

