// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// class App extends React.Component {
//   render() {
//     return <div>{/* Your application code */}</div>;
//   }
// }

// class Header extends React.Component {
//   render() {
//     return <div>{/* Your application code */}</div>;
//   }
// }
// class Content extends React.Component {
//   render() {
//     return <div>{/* Your application code */}</div>;
//   }
// }
// class Card extends React.Component {
//   render() {
//     return <div />;
//   }
// }

/*..........*/

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <Header />

        <Content />
      </div>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn a Frontend framework from scratch, to become a Ninka
          Developer
        </p>
        <button>Awesome!</button>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Card src="" title="Declarative">
          React makes it painless to create interactive UIs.
        </Card>
        <Card src="" title="Components">
          Build encapsulated components that manage their state.
        </Card>
        <Card src="" title="Single-Way">
          A set of immutable values are passed to the component's.
        </Card>
        <Card src="" title="JSX">
          Satically-typed designed to run on modern browsers.
        </Card>
      </div>
    );
  }
}
class Card extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt="" />
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
