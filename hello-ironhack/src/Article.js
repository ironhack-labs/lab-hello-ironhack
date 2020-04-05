import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render () {
    return (
      <div className="Article-box">
        <img src={this.props.image} className="Article-image" alt={this.props.image} />
        <span className="Article-title">{this.props.title}</span>
        <span className="Article-info">{this.props.info}</span>
      </div>
    )

  }
}

export default Article; 