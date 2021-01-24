import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Heroes from '../Heroes'
import GuideList from './GuideList'
import Guide from './Guide'
import { ALL_HEROGUIDES } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const HeroPage = () => {
    const id = useParams().hero
    const hero = Heroes.filter(x => x.id === id)[0]
    const [currentGuide, setGuide] = useState(0)

    const guides = useQuery(ALL_HEROGUIDES, { variables: { hero: hero.id } })

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
                <GuideList guides={guides.data?.allHeroGuides} currentGuide={currentGuide} setGuide={setGuide} />
                <Guide guide={guides.data?.allHeroGuides[currentGuide]} />
            </div>
        </div>
    )
}
export default HeroPage