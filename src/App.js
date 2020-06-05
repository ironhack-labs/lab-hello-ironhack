import React, { Component } from 'react';
import Text from './Text';
import Button from './Button';

//adding styles
import './App.css';
//this is a component, using component methods to our own app component
// components return html

class App extends Component {
    render() {

        const element = (
            <section class="main">
                <h1>Say hello to ReactJS</h1>
            </section>
        );
        return (

            <div className="App">
                <nav class="top-nav"><div class="logo"></div></nav>
                {element}
                <section className="main">
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries,
                    </Text>
                    <Button>Awesome!</Button>
                </section>
            </div>
        )
    }
}

export default App;