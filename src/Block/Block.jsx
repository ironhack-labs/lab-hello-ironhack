import './Block.css'
import React from 'react'
import Task from '../Task/Task'

const icon1 = 'images/icon1.png';
const icon2 = 'images/icon2.png';
const icon3 = 'images/icon3.png';
const icon4 = 'images/icon4.png';

const Block = () => {
    return (
        <div className='task-block'>
            <Task 
                source='images/icon1.png'
                task='Declarative'
                text='React makes it painless to create interactive UIs.'
            />

            <Task 
                source='images/icon2.png'
                task='Components'
                text='Build encapsulated components that manage their state.'
            />

            <Task 
                source='images/icon3.png'
                task='Single-Way'
                text='A set of immutable values are passed to the components.'
            />

            <Task 
                source='images/icon4.png'
                task='JSX'
                text='Statically-typed, designed to run on modern webbrowsers'
            />
        </div>
    )
}

export default Block
