import React, { useState } from 'react'
import { Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { heroNames } from '../data/Heroes'
import { Rooms } from '../data/Rooms'
import { HoverPlayer } from './HoverElement'

export const MainGuides = ({ guides }) => {
    const [currentTab, setCurrentTab] = useState('Newest')
    console.log(guides)
    return (
        <div className='recentcontent-container'>
            <div className='recentguides-root'>
                <div id='recentgames-tabs-title'>PATHFINDERS GUIDES</div>
                <div className='recentguides-tabs-parent'>
                    {['Newest', 'Top'].map((tab, key) => {
                        return (
                            <div
                                className={`recentguides-tab ${currentTab === tab ? 'active' : ''}`}
                                key={key}
                                onClick={() => setCurrentTab(tab)}
                            >
                                {tab}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='recentgames-games-difficulty active'>
                {!guides ?
                    <Loader active inverted>Loading</Loader> :
                    guides.map((guide, key) => {
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
                {!guides ? <Loader active inverted>Loading</Loader> : null}
            </div>
        </div>
    )
}

export const MainGames = ({ victoriousGames }) => {
    const [currentTab, setCurrentTab] = useState('III')
    const difficultyToTab = { 0: ['III', 2], 1: ['IV', 1], 2: ['V', 0] }
    const [position, setPosition] = useState({ top: 0, left: 0 })
    const [hoverPlayer, setPlayer] = useState(null)

    return (
        <div className='recentcontent-container' onMouseMove={(e) => setPosition({ top: e.pageY, left: e.pageX })}>
            <HoverPlayer player={hoverPlayer} position={position} />
            <div className='recentgames-root'>
                <div id='recentgames-tabs-title'>VICTORIOUS GAMES</div>
                <div className='recentgames-tabs-parent'>
                    {
                        ['III', 'IV', 'V'].map((difficulty, key) => {
                            return (
                                <div
                                    className={`recentgames-tab ${currentTab === difficulty ? 'active' : ''}`}
                                    onClick={() => setCurrentTab(difficulty)}
                                    key={key}
                                >
                                    {difficulty}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {!victoriousGames ?
                <Loader active inverted>Loading</Loader> :
                [...victoriousGames].reverse().map((difficulty, key) => {
                    return (
                        <div key={key} className={`recentgames-games-difficulty ${currentTab === difficultyToTab[key][0] ? 'active' : ''}`}>
                            {difficulty.map((game, ind) => {
                                return (
                                    <Link key={ind} className='recentgames-game-parent cleanLink' to={`/games/${difficultyToTab[key][1]}`}>
                                        <div className='flexrow-nowrap' >
                                            <span>{ind === 0 ? 'Heroes' : ''}</span>
                                            {game.players.map((player, i) => {
                                                return (
                                                    <img key={i} className='recentgames-game-player' onMouseEnter={() => setPlayer(player)} src={heroNames[player.hero].image} onMouseLeave={() => setPlayer(null)} />
                                                )
                                            })}
                                        </div>
                                        <div className='flexrow-nowrap recentgames-bosses'>
                                            <span>{ind === 0 ? 'Bosses' : ''}</span>
                                            {game.levelData.rooms.map((room, i) => {
                                                if (!Rooms[room.picked_name] || !Rooms[room.picked_name].boss) return null
                                                return (
                                                    <img key={i} className='recentgames-game-player' src={Rooms[room.picked_name].boss} />
                                                )
                                            })}
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    )
                })}
        </div>
    )
}

const RecentContent = ({ homePageContent }) => {
    return (
        <div className='mainPageTopBar'>
            <MainGuides guides={homePageContent?.guides} />
            <MainGames victoriousGames={homePageContent?.victoriousMatches} />
        </div>
    )
}

export default RecentContent

