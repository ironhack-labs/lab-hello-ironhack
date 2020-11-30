import React from "react";
import "./Main.css"


function MainTop() {
    return (
        <main>
            <div className="top-half-left-side">
                <div>
                    <h1>Welcome to React</h1>
                    <h2>This SPA has been built using React and this is why...</h2>
                    <div className="top-left-components">
                        <div className="text-block">
                            <h3>Declarative</h3>
                            <p>React makes it painless to create interactive UIs. Design simple views for each state
                            in your application, and React will efficiently update and render just the right
                            components when your data changes.Declarative views make your code more predictable and
                             easier to debug.</p>
                        </div>
                        <div className="text-block">
                            <h3>Component-Based</h3>
                            <p>
                                Build encapsulated components that manage their own state, then compose them to make complex UIs.
                                Since component logic is written in JavaScript instead of templates, you can easily pass rich data
                             through your app and keep state out of the DOM.</p>
                        </div>
                        <div className="text-block">
                            <h3>Learn Once, Write Anywhere</h3>
                            <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features
                            in React without rewriting existing code.React can also render on the server using Node and power
                              mobile apps using React Native.</p>
                        </div>
                    </div>
                    <div id="left-button">
                        <button ><a id="main-left-button" href="#">Find Out More</a></button>
                    </div>
                </div>
            </div>

            <div className="top-half-right-side">
                <h1 id="top-right-header">Upcoming Events</h1>
                <ul>
                    <li><a href="#">Lots More Coding</a></li>
                    <li><a href="#">Quite a bit More Coding</a></li>
                    <li><a href="#">Way too much swearing at inanimate objects</a></li>
                    <li><a href="#">More bug finding than a pokemon bug catcher</a></li>
                    <li><a href="#">Followed by... you guessed it, more coding!</a></li>
                    <li><a href="#">Then its Project week!</a></li>
                    <li><a href="#">code, Bug, Debug, code again!</a></li>
                    <li><a href="#">code, Bug, Debug, code again!</a></li>
                    <li><a href="#">oh shit out of time!</a></li>
                    <li><a href="#">Annnnnnnd thats a wrap for Ironhack!</a></li>
                    <li><a href="#">Time time find a job!</a></li>
                </ul>
            </div>

        </main >
    );
}

export default MainTop;
