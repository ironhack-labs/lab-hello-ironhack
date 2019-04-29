import React from 'react';

class App extends React.Component {
    render() {
        const logo = '/images/ironhack-logo.svg';
        const menubars = '/images/menu-top.svg';
        const declareImg = '/images/icon1.png';
        const componentImg = '/images/icon2.png';
        const singleImg = '/images/icon3.png';
        const jsxImg = '/images/icon4.png';
        const element = (
            <div>
                <header className="banner">
                    <nav>
                        <div className="nav-items">
                            <img src={logo} />
                            <img src={menubars} />
                        </div>
                    </nav>
                    <div className="banner-content">
                        <h1>Say hello to ReactJS</h1>
                        <p>
                            You will learn a Frontend framework from scratch to become a Ninja Developer
                        </p>
                        <a href="#" className="myButton">
                            Awesome
                        </a>
                    </div>
                </header>
                <section>
                    <div className="col-1-4">
                        <img width="50px" src={declareImg} />
                        <h3>Declarative</h3>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div className="col-1-4">
                        <img width="50px" src={componentImg} />
                        <h3>Components</h3>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>
                    <div className="col-1-4">
                        <img width="50px" src={singleImg} />
                        <h3>Single-Way</h3>
                        <p>A set of immutable values are passed to the components</p>
                    </div>
                    <div className="col-1-4">
                        <img width="50px" src={jsxImg} />
                        <h3>JSX</h3>
                        <p>Statically-typed designed to run on modern browsers</p>
                    </div>
                </section>
            </div>
        );
        return element;
    }
}
export default App;
