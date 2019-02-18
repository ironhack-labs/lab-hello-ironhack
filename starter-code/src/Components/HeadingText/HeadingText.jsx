import React from 'react';
import Button from '../Button/Button'
import "./HeadingText.css"


class HeadingText extends React.Component {
    render() {
        return (
            <div className="heading-text">
                <h1>Say hello to <br/> ReactJS</h1>
                <p>You will learn a Frontend <br />framework from srach, to <br />become a Ninja Developer</p>
                <Button name="Awesome!" />
            </div>
        )
    }
}

export default HeadingText;