import React, {Component} from 'react';
import '../App.css'

export default class Header extends Component {
    render({img, title, desc} = this.props) {
        return (
            <div className='cardStyle'>
                <img src={img} width='100px' height='100px'/>
                <h3>{title}</h3>
                <span>{desc}</span>
            </div>
        );
}
}