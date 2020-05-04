import React from 'react';
import ReactDOM from 'react-dom';

const navbar =(
    <div>
        <img src='ironhack-logo.svg'></img>
        <img src='\images\menu-top.svg'></img>
    </div>
)
const myStyle={
    backgroundColor: '#252850',
    color:'white',
    marginTop:'3rem',
    marginRight:'2rem',
    height:'400px',
    display:'flex',
flexDirection:'column',
}

const textfield={
    width:'200px',
    marginLeft:'2rem',
   marginTop:'6rem',
}
const element=(
    <div style={myStyle}> 
    <div style={textfield}>
    <h1> Say hello to ReactJS</h1>
    <p>You will learn a Frontend framework from scratch, to becaome an Ninka Developer</p>
   <button style={{height:'4rem', width:'8rem', borderRadius:'1rem'}}>Awesome!</button>
   </div>
    </div>
);

const informationContainer={
    marginTop:'2rem',
    marginRight:'1rem',
marginLeft:'1rem',
    display: 'flex',
    flexDirection:'row' ,
    justifyContent:'space-evenly',
    
}
const information=(
    <div style={informationContainer}>
        <div >
            <img src='\images\icon1.png'></img>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div>
            <img src='\images\icon2.png'></img>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
        </div>

        <div>
            <img src='\images\icon3.png'></img>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div>
            <img src='\images\icon4.png'></img>
            <h3>JSX</h3>
            <p>Statically-typed designed to run on modern browsers.</p>
        </div>

    </div>
)

ReactDOM.render(
    element,
    document.getElementById('root')
);

ReactDOM.render(
    navbar,
    document.getElementById('navbar')
);

ReactDOM.render(
    information,
    document.getElementById('information')
);