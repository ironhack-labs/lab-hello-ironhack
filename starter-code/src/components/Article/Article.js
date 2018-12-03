import React from "react";
import "./Article.css";

class Article extends React.Component {

  constructor(props){
    super(props)
  }



  render() {
    console.log(this.props)
  
      return (
        <div id="article-container">
          <img src={this.props.image} width='140px' height='140px' />
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
      )
    
  }
}

export default Article;





