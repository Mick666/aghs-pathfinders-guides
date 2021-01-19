import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Heroes from '../Heroes'
import Guides from '../Guides'
import GuideList from './GuideList'
import Guide from './Guide'

const HeroPage = () => {
    const id = useParams().hero
    const hero = Heroes.filter(x => x.id === id)[0]
    const guides = Guides.filter(x => x.hero === id)
    const [currentGuide, setGuide] = useState(0)

    console.log(currentGuide)
    return (
        <div className='heroPage'>
            <div className='heroHeader'>
                <div>
                    <img className='heroHeaderImage' src={hero.image} />
                </div>
                <div className='heroDesc'>
                    <h2>{hero.id}</h2>
                    <div>
                        {hero.desc}
                    </div>
                </div>
            </div>
            <div className='guideGrid'>
                <GuideList hero={id} currentGuide={currentGuide} setGuide={setGuide} />
                <Guide guide={guides[currentGuide]} />
            </div>
        </div>
    )
}
// use State & conditional check (using the index of the list) to highlight the tab in question
export default HeroPage