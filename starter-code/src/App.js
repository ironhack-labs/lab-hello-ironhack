import React, { Component } from 'react';
import './App.css';

import {AppWrapper, TextWrapper, Features} from './App.styled';
import Navbar from './components/Navbar';
import Title from './components/Title';
import MainButton from './components/MainButton';
import Feature from './components/Feature';



class App extends Component {
    state = {
        list: [
        {
            img: '/images/icon1.png',
            title: 'Declarative',
            desc: 'React makes it painless to create interactive UIs.'
        },
        {
            img: '/images/icon2.png',
            title: 'Components',
            desc: 'Build encapsulated components that manage their state.'
        },
        {
            img: '/images/icon3.png',
            title: 'Single-Way',
            desc: 'A set of immutable values are passed to the components.'
        },
        {
            img: '/images/icon4.png',
            title: 'JSX',
            desc: 'Statically typed designed to run on modern browsers.'
        }
    ]
}

    render() {
        return(
            <React.Fragment>
                <AppWrapper>
                    <Navbar/>
                    <TextWrapper>
                        <Title/>
                        <MainButton/>
                    </TextWrapper>
                </AppWrapper>
                <Features>
                    {this.state.list.map(feature => (
                       <Feature
                            feature = {feature}
                       />
                    ))}
                </Features>
            </React.Fragment>
        )
    }
}

export default App;