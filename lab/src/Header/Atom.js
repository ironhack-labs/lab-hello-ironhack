import React from 'react'

export default function Atom() {

    return (
        <>
            <div class="height">
                
                {(() => {
                    let atoms = [];
                    for(let i = 0; i < 5; i++){
                        atoms.push(<img class="" src="./images/react-logo.svg" alt=""/>)
                    }
                    return atoms;
                })()}
            </div>

        </>
    )
}

