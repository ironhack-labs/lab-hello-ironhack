import React, {Component} from 'react';

import Nav from './Nav';
import Cover from './Cover';

import './AboveFold.css';

class AboveFold extends Component {
    render() {
        return(
            <div className="introSection">
            <Nav />
            <Cover />
            </div>

        )
    }
}

export default AboveFold;