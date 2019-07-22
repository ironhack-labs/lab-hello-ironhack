import React, { Component } from 'react';
import '../footer.css';

class Footer extends Component {
  
  
  options = ()=>{
    let arr=["Contribute", "Github","LinkedIn","Ironhack"]
    return(
      arr.map((e)=>{
        return(
          <li class="options">{e}</li>
        )
      })
    )
  }
  
  
  render(){
    return(
      <div class="foot">
        <div>
          <h3>Options: </h3>
          <ul>
          {this.options()}
          </ul>
        </div>
        <div class="thanks">
      <h2>Thanks for reading!</h2>
        </div>
      </div>
    )
  }
}
export default Footer;