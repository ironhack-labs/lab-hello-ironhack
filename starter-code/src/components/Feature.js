import React from 'react';
export default class Feature extends React.Component{
  

    render(){
        return(
            <div>
                { <img src={this.props.fImg}></img> }
                { <h2>{this.props.fTitle}</h2>}
                {<p>{this.props.fText}</p> }
               
            </div>
        )
    }
}


