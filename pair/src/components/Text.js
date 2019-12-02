import React, { Component } from 'react';
import Image2 from '../images/friend.jpeg'

class Text extends Component {


    render() {
        return (

            <div class="center">
                <h1>Say hello to my little friend</h1>
                <img src={Image2} alt="imagen perfil" />
                <p>Now you're talking to me baby! That I like!</p>
            </div>
        )
    }
}

export default Text


