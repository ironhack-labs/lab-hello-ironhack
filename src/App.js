import React from "react";
import Image from './Image';
import './App.css';

class App extends React.Component {
    render(){
        
return (
<section>
<div className="intro">
<h1>Say hello to <br></br> ReactJS</h1>
<p className="introtext">You will learn how to use <br></br> the most popular frontend library, <br></br> and become a super Ninja developer</p>
<button className="button">Awesome!</button>
</div>
<div className="intro2">

<Image img="images/icon1.png" header="Declarative" parrafo="React makes it painless to create inteactive to UIs"/>

<Image img="images/icon2.png" header="Components" parrafo="Build emcapsulate components that manage they states"/>

<Image img="images/icon3.png" header="single-way" parrafo="Asset of inmmutable values are passed to the components"/>

<Image img="images/icon4.png" header="Jsx" parrafo="Staticaly-tiped, designed to run on modern browsers"/>


</div>


</section>
)
}
}
export default App;