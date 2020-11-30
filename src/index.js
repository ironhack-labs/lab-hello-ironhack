import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const name = 'Kevin';
// embed any js expression within {}
// const element = <h1>Hello {name + '!!'}</h1>
// we can return jsx from functions
const greet = () => <h1>Hello {name + '!!'}</h1>
// multiple lines
// const element = (
//     <h1>
//         Hello World
//     </h1>
// );

//attributes : class -> className, for -> htnlFor
//inline styling 
const styling = {
    color: 'white',
}
const element = (
    //the div is our root element
    <div>
        <h1 style={styling}>
            Say hello to ReactJS
        </h1>
        <p style={styling}>
            You will learn how to use <br/>
            the most popular frontend libray <br/>
            and become a super ninja developer.
        </p>

        <span style={styling}>Awesome!</span>
    </div>
)


ReactDOM.render(
    element,
    document.getElementById('root')
)