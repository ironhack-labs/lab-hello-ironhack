
import Card from './Card'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'

const DisplayCards = () => {

    return (

        <div className='cardSection'>
            <Card
                image={icon1}
                title='declarative'
                article='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sed?'
            />
            <Card
                image={icon2}
                title='Components'
                article='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sed?'
            />
            <Card
                image={icon3}
                title='Single-Way'
                article='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sed?'
            />
            <Card
                image={icon4}
                title='JSX'
                article='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sed?'
            />
        </div>


    )
}

export default DisplayCards
