import React, { Component } from "react";
import "./App.css";
import {
  Jumbotron, CardGroup, Button, Card, CardImg, CardBody, CardTitle, CardText

} from 'reactstrap';


class App extends Component {
  render() {

    const ironImage = "/images/ironhack-logo.svg"
    // const icon1 = "/images/icon1.png";
    // const icon2 = "/images/icon2.png";
    // const icon3 = "/images/icon3.png";
    // const icon4 = "/images/icon4.png";

    const images = ["/images/icon1.png", "/images/icon2.png", "/images/icon3.png", "/images/icon4.png"]



    // const data =[
    //   {images: }
    //   {}
    //   {}
    //   {}
    // ]

    const user = {
      firstName: 'Fairouz',
      lastName: 'West',
    };

    return (
      <div className="App">
        <Jumbotron>
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
        </Jumbotron>

        <CardGroup>

          {images.map(element => {
            return <Card body className="text-center">
              <CardBody>
                <img src={element} width="100" height="100" />
                <CardTitle>Declarative</CardTitle>
                <CardText>
                  <small className="text-muted">React makes it painless to create interactive UI.</small>
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

