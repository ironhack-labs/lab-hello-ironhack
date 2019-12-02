import React, { Component } from 'react';


class Footer extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {

        return (
            <footer>
                <div>
                    <img src={this.props.image} alt='' />
                    <h3>{this.props.title}</h3>
                    <p>{this.props.parrafo}</p>
                </div>


            </footer>
        )

    }
}

export default Footer
