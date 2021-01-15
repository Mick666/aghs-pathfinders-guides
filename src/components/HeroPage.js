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
    return (
        <div className='heroPage'>
            <div className='heroDesc'>
                {hero.desc}
            </div>
            <div className='guideGrid'>
                <GuideList hero={id} />
                <Guide guide={guides[currentGuide]}/>
            </div>
        </div>
    )
}
// use State & conditional check (using the index of the list) to highlight the tab in question
export default HeroPage