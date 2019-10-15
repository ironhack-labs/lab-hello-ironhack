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
            <img src={ironImage} width="100" height="100" />

            <h1 className="" className="display-3"> Say hello to ReactJS  </h1>

            <div>
              <p className="lead">You will learn a Frontend framework from scratch, to become an {user.firstName} Developer.
            </p>
              <hr className="my-2" />
            </div>
            <p className="lead">
            </p>

            <Button color="primary">Awesome!</Button>
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

          {/* <Card body className="text-center">
            <CardBody>
              <img src={icon1} width="100" height="100" />
              <CardTitle>Declarative</CardTitle>
              <CardText>
                <small className="text-muted">React makes it painless to create interactive UI.</small>
              </CardText>
            </CardBody>
          </Card> */}


          {/* <Card body className="text-center">
            <CardBody>
              <img src={icon1} width="100" height="100" />
              <CardTitle>Declarative</CardTitle>
              <CardText>
                <small className="text-muted">React makes it painless to create interactive UI.</small>
              </CardText>
            </CardBody>
          </Card>

          <Card body className="text-center">
            <CardBody>
              <img src={icon2} width="100" height="100" />
              <CardTitle>Components</CardTitle>
              <CardText>
                <small className="text-muted">Build encapsulated components that manage their state.</small>
              </CardText>
            </CardBody>
          </Card>

          <Card body className="text-center">
            <CardBody>
              <img src={icon3} width="100" height="100" />
              <CardTitle>Single-Way</CardTitle>
              <CardText>
                <small className="text-muted">A set of immutable values...</small>
              </CardText>
            </CardBody>
          </Card>

          <Card body className="text-center" style={{ backgroundColor: '#ffffff' }}>
            <CardBody>
              <img src={icon4} width="100" height="100" />
              <CardTitle>JSX</CardTitle>
              <CardText>
                <small className="text-muted">Statically typed...</small>
              </CardText>
            </CardBody>
          </Card> */}

        </CardGroup>

      </div>

    );
  }
}

export default App;

