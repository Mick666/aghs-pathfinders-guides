import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { RECENT_GUIDES } from '../graphql/queries'
import { Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { heroNames } from '../data/Heroes'

export const MainGuides = () => {
    const guides = useQuery(RECENT_GUIDES)
    const [currentTab, setCurrentTab] = useState('new')
    return (
        <div className='recentContentContainer recentGuides'>
            <div className='recentGuidesTabs'>
                <div className='recentGuidesTab' id='recentGuidesTitle'>PATHFINDERS GUIDES</div>
                <div
                    className={`recentGuidesTab ${currentTab === 'new' ? 'active' : ''}`}
                    id='recentGuidesNewest'
                    onClick={() => setCurrentTab('new')}
                >
                    Newest
                </div>
                <div
                    className={`recentGuidesTab ${currentTab === 'top' ? 'active' : ''}`}
                    id='recentGuidesTop'
                    onClick={() => setCurrentTab('top')}
                >
                    Top
                </div>
            </div>
            <div className='recentGuidesContainer'>
                {guides.loading || !guides.data ? <Loader active inverted>Loading</Loader> : guides.data.allGuides.slice(0, 3).map((guide, key) => {
                    return (
                        <Link key={key} className='recentGuideIndiv cleanLink' to={`/heroes/${guide.hero}/${guide.id}`}>
                            <img src={heroNames[guide.hero].image} className='recentGuideImage' />
                            <div className='recentGuideDetails'>
                                <div className='recentGuideTitle'>{guide.title}</div>
                                <div>Created on: {guide.createdAt}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className='topGuidesContainer hidden'>
                {guides.loading ? <Loader active inverted>Loading</Loader> : null}
            </div>
        </div>
    )
}

export const MainGames = () => {
    const [currentTab, setCurrentTab] = useState('new')

    return (
        <div className='recentContentContainer recentGuides'>
            <div className='recentGuidesTabs'>
                <div className='recentGuidesTab' id='recentGuidesTitle'>VICTORIOUS GAMES</div>
                <div
                    className={`recentGuidesTab ${currentTab === 'new' ? 'active' : ''}`}
                    id='recentGuidesNewest'
                    onClick={() => setCurrentTab('new')}
                >
                    Newest
                </div>
                <div
                    className={`recentGuidesTab ${currentTab === 'top' ? 'active' : ''}`}
                    id='recentGuidesTop'
                    onClick={() => setCurrentTab('top')}
                >
                    Top
                </div>
            </div>
            <div id='placeholderGames'>Coming soon!</div>
        </div>
    )
}

