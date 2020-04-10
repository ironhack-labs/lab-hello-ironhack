import React from 'react';
import Text from './Text'
import Image from './Image'

const TextImg = () => {
    return (
        <div className="flex p-md bg-main">
            <Text title="Say hello to ReactJS" text="You will learn a front-end framework from scratch, to become a ninja developer 😎" className="flex-item-2-3" />
            <Image src="./images/react-logo.svg" alt="ReactJS" className="flex-item-1-3" />
        </div>
    )
}

export default TextImg;