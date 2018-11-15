import React,{Component} from 'react';
import './App.css';
import logo from '../public/images/ihLogo.svg';
import top from '../public/images/menu-top.svg';

class Uno extends Component{
    render(){
        return(
            <div className='portada'>
                <img src={logo} className="logoUno" alt="logo" />
                <img src={top}  className="logoDos" alt="logo" />
                <h1 className='letraTit'>Say hello to ReactJS</h1>

                <p className='letraTxt'>
                    You will learn a FrontEnd framework from scratch to become an Ninja Developer
                </p><br/><br/>
                <button type='submit' >Awesome!</button>
            </div>

        );
    }
}

export default Uno;

