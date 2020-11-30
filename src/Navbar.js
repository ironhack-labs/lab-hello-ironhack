import React from 'react';

class Navbar extends React.Component{
    
    render(){
        return(
            <div>
                <img src={this.props.logo1}/>
                <img src={this.props.logo2}/>
            </div>
        )
    }
}

export default Navbar;