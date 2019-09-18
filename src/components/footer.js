import React from 'react';
import elements from '../footItem.json'

class Footer extends React.Component {

    constructor(props){
        super(props)
        this.state = {list: elements}
    }
  
    displayFootElements = ()=>{

        return this.state.list.map((eachElement) => {
            return (
                <div className="footerDiv">
                <img src={eachElement.icon} alt="Icon"></img>
                <h2>{eachElement.title}</h2>
                <p>{eachElement.paragraph}</p>
                
                
                
                </div>
            )
        })
    }


render(){
    return (
        <div className="reactFoot">
        
        {this.displayFootElements()}
        </div>
    )
}
}

export default Footer;
