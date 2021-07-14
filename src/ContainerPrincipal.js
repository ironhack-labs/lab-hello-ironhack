import React from 'react';

function Container (){
    return (
        <div className = 'container-principal'>
            <div>
                <div>
                    <h1>
                        Say hello to <br></br>
                        ReactJS
                    </h1>
                    <p>
                        You will learn how to use <br></br>
                        the most popular frontend library, <br></br>
                        and become a super ninja developer
                    </p>
                </div>
                <a href= '#' >Awesome!</a>
            </div>
            <div className = 'react-logos'>
                <div>
                    <img src = '../images/react-logo.svg' className = 'react1'></img>
                    <img src = '../images/react-logo.svg' className = 'react2' ></img>
                </div> 
                <div>
                    <img src = '../images/react-logo.svg' className = 'react3'></img>
                    <img src = '../images/react-logo.svg' className = 'react4'></img>
                </div> 
                <div>
                    <img src = '../images/react-logo.svg' className = 'react5'></img>
                    <img src = '../images/react-logo.svg' className = 'react6'></img>
                </div>
                
                
                
            </div>
        </div>
        
    )
}

export default Container