import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'

import { heroNames } from '../data/Heroes'
import Items from '../data/Items'
import Shards from '../data/Shards'
import Abilities from '../data/Abilities'
import sortItems from '../utils/sortItems'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ', ')
}

function cleanUpRoomNames(str) {
    const room = str.replace('encounter', '').replace(/_/g, ' ')
    return room.split(' ').map(x => x.split('').map((y, i) => i === 0 ? y.toUpperCase() : y).join('')).join(' ')
}

const Game = ({ match }) => {
    console.log(match)
    const [expanded, setExpanded] = useState(false)
    return (
        <div className='flexRow game-parent'>
            <div className='game-players flexRow'>
                {match.players.map((player, key) => {
                    const playerItems = sortItems(player.items)
                    return (
                        <div key={key} className='flexRow game-player-parent'>
                            <div className='flexColumn game-player-hero'>
                                <img src={heroNames[player.hero].image} className='game-hero-image' />
                                <div className='flexRow game-player-shards-parent'>
                                    {player.upgrades.map((shard, key) => {
                                        return <img key={key} className='game-player-shards' src={Shards[shard] ? Abilities[Shards[shard].skill].link : ''} />
                                    })}
                                </div>
                            </div>
                            <div className='flexColumn game-player-detailed'>
                                <div className='flexRow game-player-items'>
                                    {playerItems[0].map((item, ind) => {
                                        return (
                                            Items[item] ? <img src={Items[item].link} className='game-item-image' key={ind} /> : <span className='game-item-emptyslot' key={ind}>{item}</span>
                                        )
                                    })}
                                </div>
                                <div className='flexRow game-player-backpack'>
                                    {playerItems[1].map((item, ind) => {
                                        return (
                                            Items[item] ? <img src={Items[item].link} className='game-item-image' key={ind} /> : <span className='game-item-emptyslot' key={ind}>{item}</span>
                                        )
                                    })}
                                </div>
                                <div className='game-player-neutral-parent'>
                                    {Items[playerItems[2]] ? <img src={Items[playerItems[2]].link} className='game-item-image game-player-neutral' />
                                        : <span className='game-item-emptyslot'>{playerItems[2]}</span>
                                    }
                                </div>
                            </div>
                            <div className={`flexRow game-player-stats-parent ${expanded ? 'active' : ''}`}>
                                <div className='flexColumn heroStats game-player-stats'>
                                    <span className='heroStatNumbers centerText game-player-stats-number'>{numberWithCommas(Math.floor(player.damage_dealt))}</span>
                                    <span className='heroStatTitle'>Damage dealt</span>
                                </div>
                                <div className='flexColumn heroStats game-player-stats'>
                                    <span className='heroStatNumbers centerText  game-player-stats-number'>{numberWithCommas(Math.floor(player.damage_taken))}</span>
                                    <span className='heroStatTitle'>Damage taken</span>
                                </div>
                                <div className='flexColumn heroStats game-player-stats'>
                                    <span className='heroStatNumbers centerText  game-player-stats-number'>{player.deaths}</span>
                                    <span className='heroStatTitle'>Deaths</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='flexRow game-player-expand-parent' onClick={() => setExpanded(!expanded)}>
                <Icon name={`caret square ${expanded ? 'up' : 'down'} outline`} className='game-expansion-icon' />
                <span>{expanded ? 'Hide' : 'Expand'}</span>
            </div>
            <div className={`flexColumn game-rooms-root ${expanded ? 'active' : ''}`}>
                <span className='heroStatTitle centerText'>Rooms</span>
                <div className='flexColumn game-rooms-parent'>
                    {match.levelData.rooms.map((room, key) => {
                        return (
                            <div key={key}>
                                <span>{key + 1}</span>
                                <span className='game-room-name'>{cleanUpRoomNames(room.picked_name)}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Game