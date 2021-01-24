import React, { useState } from 'react'

import GuideList from './GuideList'
import Guide from './Guide'
import { useQuery } from '@apollo/client'
import { ALL_GUIDES } from '../graphql/queries'

const AllGuides = () => {
    const [currentGuide, setGuide] = useState(0)

    const guides = useQuery(ALL_GUIDES)

    console.log(guides)
    return (
        <div className='heroPage'>
            <div>
                <h2 className='allGuides'>All Guides</h2>
            </div>
            <div className='guideGrid'>
                <GuideList guides={guides.data?.allGuides} currentGuide={currentGuide} setGuide={setGuide} />
                <Guide guide={guides.data?.allGuides[currentGuide]} />
            </div>
        </div>
    )
}
// use State & conditional check (using the index of the list) to highlight the tab in question
export default AllGuides