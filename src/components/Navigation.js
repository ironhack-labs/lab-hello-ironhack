import React, {Component} from 'react';

export default class Navigation extends Component {

    render({logo, menu} = this.props) {
        return (
            <header id="navigation">
                <nav>
                    <a href='#'>
                        <img src={logo}/>
                    </a>
                    <a href='#'>
                        <img src={menu}/>
                    </a>
                </nav>
            </header>
        )
    }
}

