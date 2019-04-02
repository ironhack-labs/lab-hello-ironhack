import React, { Component } from 'react';
import Article from './componentes/article';
import NavBar from './componentes/NavBar';
import Content from './componentes/Content';
import './App.css';



class App extends Component {
  render() {
    
    return (
      <div className="App">
        <div>
          < NavBar />
        </div>
        <div className="App-header">
          <Content
          title="Say Hello to ReactJS"
          text="You will learn a frontend framework from scratch to become a Ninka Developer."
          buttonText="Awesome!"
          />
        </div>
        <div>
        
       <Article />
        </div>
     
      </div>
    );
  }
}

export default App;
