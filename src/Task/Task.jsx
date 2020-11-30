import "./Task.css"
import React from 'react'

const Task = (props) => {
    console.log(props)
    return (
        <div className='block'>
            <img src={props.source} alt={props.task}/>
            <h2>{props.task}</h2>
            <p>{props.text}</p>  
        </div>
    )
}

export default Task;
