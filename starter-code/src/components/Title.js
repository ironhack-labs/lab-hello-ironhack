import React from 'react';
import '../app.css'
class Title extends React.Component {
  render() {
    return (
      <div className='title-container'>
        <div className='title' >{this.props.titleText}</div>
        <div className='sub-title'>{this.props.subtitleText}</div>
      </div>
    )
  }
}

export default Title