import React, {Component} from 'react';
import './App.css';


class Atom extends Component {
    render(props){
        return (<img src={this.props.imagen}/>);
    }
}



export default Atom;