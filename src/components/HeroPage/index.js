import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { heroNames } from '../../Heroes'
import GuideList from '../GuideList'
import Guide from '../Guide'
import { ALL_HEROGUIDES, SINGLE_HEROSTATS } from '../../graphql/queries'
import HeroHeader from './HeroHeader'
import HeroStats from './HeroStats'

const HeroPage = () => {
    const id = useParams().hero
    const hero = heroNames[id]
    const [currentGuide, setGuide] = useState(0)
    const [currentTab, setCurrentTab] = useState('Items & Levelling')
    const [currentView, setCurrentView] = useState('Guides')
    const [stats, setStats] = useState(null)

    const guides = useQuery(ALL_HEROGUIDES, { variables: { hero: hero.id } })
    const statsQuery = useQuery(SINGLE_HEROSTATS, { variables: { hero: hero.id } })

    useEffect(() => {
        if (statsQuery.data) {
            const rawStats = [...statsQuery.data.heroStats].map(difficulty => {
                return {
                    ...difficulty,
                    shardWinrates: [...difficulty.shardWinrates].sort((a, b) => (b.victories / b.defeats) - (a.victories / a.defeats))
                }
            })
            console.log(rawStats)
            setStats(rawStats)
        }
    }, [statsQuery])

    console.log(stats)

    return (
        <div className='heroPage'>
            <HeroHeader
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                hero={hero}
                currentView={currentView}
                setCurrentView={setCurrentView}
            />
            <div className={`guideGrid ${currentView === 'Guides' ? '' : 'hidden'}`}>
                <GuideList guides={guides.data?.allHeroGuides} currentGuide={currentGuide} setGuide={setGuide} forHeroPage />
                <Guide guide={guides.data?.allHeroGuides[currentGuide]} currentTab={currentTab} />
            </div>
            <HeroStats currentView={currentView} stats={stats} hero={hero} currentTab={currentTab} setStats={setStats} statsQuery={statsQuery} />
        </div>
    )
}
export default HeroPage