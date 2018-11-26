import React, {Component} from 'react';
import './SplashScreen.css';

class SplashScreen extends Component {
    render() {
        return (
            <div className="splash">
                <div className="content">
                    <h1>Say hello to<br></br>ReactJS</h1>
                    <h2>You will learn a Frontend<br></br>framework from scratch, to<br></br>become a Ninja Developer.</h2>
                    <button>Awesome!</button>
                </div>
            </div>
        );
    }
}

export default SplashScreen;