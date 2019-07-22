import React, {Component} from 'react';
import '../stylesheets/Main.css';

class Main extends Component {

  why = () => {
    


    return (
      <div>
        <p>
        Facebook did it
Facebook is an amazing company with incredible engineers. The fact that they created React should immediately lend credibility to the library.

        </p>
        <p>

It’s easier to reason about.
State (specially state changing over time) is the root of all bugs in modern application development. By using Virtual DOM, React completely removes the need for State from any application, making everything easier to reason about. And if you absolutely need state in your application, you can use Redux or a different library completely focused on State such as Cycle.js. (React and Cycle are actually very similar — except for the fact that while React follows a reactive pattern, Cycle.js follows a cyclic one).
        </p>
        <p>

It’s just the “V”
MVC is an antiquated pattern created for small, talking systems of the 80s. Why bother with the M and the C when they have no use on the web?
        </p>
        <p>

Everybody is talking about it
Let’s be pragmatic — “Cool” is not enough. If you want to land a job, You need to learn something that is spreading crazily across the industry, so fast that everybody is hiring and nobody really knows how to differentiate a good React developer from a bad one.
        </p>
        <p>
Unleash the power of functional & reactive programming
Functional programming has its roots on LISP (Latin/Iberian/Spanish Programmers) and is experiencing a renaissance due to inclusive and non-discriminatory policies on large technology companies. Together with reactive programming (another word for “Object-oriented”), it’s a highly demanded skill for new professionals.

        </p>
      </div>
    )
  }

  render() {

    return (
      <div className="main-wrapper">

      <div className="main">
      <h2> Why you SHOULD learn React!</h2>
      
      <ul>
        {this.why()}
      </ul>
      


    </div>
      </div>
  );
}
}

export default Main;
