import React from 'react';

class User extends React.Component {

    render(){
        let userInfo = {};
        if (this.props.user){
            return (
                <h1>Welcome to my landing page {this.props.user.first} {this.props.user.last}</h1>
            )
        } else {
            return(
                <h3>Welcome everybody</h3>
            )
        }
    }
}

export default User;