import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'

import { heroNames } from '../data/Heroes'
import Items from '../data/Items'
import Shards from '../data/Shards'
import Abilities from '../data/Abilities'
import sortItems from '../utils/sortItems'
import { Rooms, Modifiers } from '../data/Rooms'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ', ')
}

function cleanUpRoomNames(str) {
    const room = str.replace('encounter', '').replace(/_/g, ' ')
    return room.split(' ').map(x => x.split('').map((y, i) => i === 0 ? y.toUpperCase() : y).join('')).join(' ')
}

const getRoomImage = (room, elite) => {
    if (room === 'nil') return ''
    else if (!Rooms[room]) return ''
    else if (Rooms[room].rest) return 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7c/Aghanim%27s_Labyrinth_Room_Rest.png'
    else if (Rooms[room].traps) return 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/10/Aghanim%27s_Labyrinth_Room_Trap.png'
    else if (Rooms[room].boss) return 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9c/Aghanim%27s_Labyrinth_Room_Boss.png'
    else if (Rooms[room].bonus) return 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/0b/Aghanim%27s_Labyrinth_Room_Bonus.png'
    else if (elite) return 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/de/Aghanim%27s_Labyrinth_Room_Elite.png'
    return 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a5/Aghanim%27s_Labyrinth_Room_Combat.png'
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
            <div className={`flexRow game-player-expand-parent ${expanded ? 'active' : ''}`} onClick={() => setExpanded(!expanded)}>
                <Icon name={`caret square ${expanded ? 'up' : 'down'} outline`} className='game-expansion-icon' />
                <span>{expanded ? 'Hide' : 'Expand'}</span>
            </div>
            <div className={`flexColumn game-rooms-root ${expanded ? 'active' : ''}`}>
                {/* <span className='heroStatTitle centerText'>Rooms</span> */}
                <table className='flexColumn game-rooms-parent'>
                    <tbody>
                        <tr className='game-room-table-row'>
                            <th className='game-room-table'>Depth</th>
                            <th className='game-room-table'>Picked Room</th>
                            <th className='game-room-table' />
                            <th className='game-room-table'>Unpicked Room</th>
                            <th className='game-room-table' />
                        </tr>
                        {match.levelData.rooms.map((room, key) => {
                            return (
                                <tr key={key} className='game-room-table-row'>
                                    <td className='game-room-table'>{key + 1}</td>
                                    <td className='game-room-table'>{Rooms[room.picked_name] ? Rooms[room.picked_name].name : room.picked_name}</td>
                                    <td className='game-room-table'><img className='game-room-image' src={getRoomImage(room.picked_name, room.picked_elite)} /></td>
                                    <td className='game-room-table'>{Rooms[room.unpicked_name] ? Rooms[room.unpicked_name].name : room.unpicked_name}</td>
                                    <td className='game-room-table'><img className='game-room-image' src={getRoomImage(room.unpicked_name, room.unpicked_elite)} /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Game