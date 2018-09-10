import React from 'react';
import ironLogo from '../../public/ironhack-logo.svg';
import menuTop from '../../public/menu-top.svg';
import reactLogo from '../../public/react-logo.svg';

class Application extends React.Component {
    render() {
        return (
            <div className="application">
                <nav className="top-bar-wrapper">
                    <img src={ironLogo} alt="Ironhack logo" />
                    <img src={menuTop} alt="menu" />
                </nav>

                <div className="content-wrapper">
                    <h1>
                        Say hello to <br />
                        ReactJS
                    </h1>
                    <p>
                        You will learn a Frontend <br />
                        from scratch, to <br />
                        become a Ninka Developer
                    </p>
                    <button>Awesome!</button>
                </div>

                <img src={reactLogo} alt="React logo" />
            </div>
        );
    }
}

export default Application;
