import React, { useState } from 'react'
import { Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { heroNames } from '../data/Heroes'
import { Rooms } from '../data/Rooms'
import { removeHoverElement, setHoverElement } from '../redux/hoverReducer'

const MainGuides = ({ guides }) => {
    const [currentTab, setCurrentTab] = useState('Newest')
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
            {!guides ?
                <div className='recentgames-games-difficulty active loading'>
                    <Loader active inverted className='recentcontent-loader'>Loading</Loader>
                </div> :
                <div className='recentgames-games-difficulty active loading'>
                    {guides.map((guide, key) => {
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

            }
            <div className='topGuidesContainer hidden'>
                {!guides ? <Loader active inverted>Loading</Loader> : null}
            </div>
        </div>
    )
}

const MainGames = ({ victoriousGames }) => {
    const [currentTab, setCurrentTab] = useState('III')
    const difficultyToTab = { 0: ['III', 2], 1: ['IV', 1], 2: ['V', 0] }
    const dispatch = useDispatch()

    return (
        <div className='recentcontent-container'>
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
                <div className='recentgames-games-difficulty active loading'>
                    <Loader active inverted className='recentcontent-loader'>Loading</Loader>
                </div> :
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
                                                    <img key={i} className='recentgames-game-player'
                                                        src={heroNames[player.hero].image}
                                                        onMouseEnter={(e) => dispatch(setHoverElement('player', e, player))}
                                                        onMouseLeave={() => dispatch(removeHoverElement())}
                                                    />
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

