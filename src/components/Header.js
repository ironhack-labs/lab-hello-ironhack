import React, {Component} from 'react';
import '../App.css'
//import ihLogo from '../../public/images/ironhack-logo.svg';
//import menuIcon from '../../public/images/menu-top.svg';

export default class Header extends Component {
    render({img} = this.props) {
        return (
            <div className='headerComponent'>
                <img src={img} />
            </div>
        );
}
}