import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Guides from '../Guides'
import GuideList from './GuideList'
import Guide from './Guide'

const AllGuides = () => {
    const id = useParams().hero
    const [currentGuide, setGuide] = useState(0)

    console.log(currentGuide)
    return (
        <div className='heroPage'>
            <div>
                <h2 className='allGuides'>All Guides</h2>
            </div>
            <div className='guideGrid'>
                <GuideList hero={id} currentGuide={currentGuide} setGuide={setGuide} />
                <Guide guide={Guides[currentGuide]} />
            </div>
        </div>
    )
}
// use State & conditional check (using the index of the list) to highlight the tab in question
export default AllGuides