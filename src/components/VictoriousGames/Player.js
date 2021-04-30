import React from 'react'
import { useDispatch } from 'react-redux'

import { heroNames } from '../../data/Heroes'
import Items from '../../data/Items'
import Shards from '../../data/Shards'
import Abilities from '../../data/Abilities'
import sortItems from '../../utils/sortItems'
import { removeHoverElement, setHoverElement } from '../../redux/hoverReducer'


const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ', ')

const Player = ({ player, expanded, individualGame }) => {
    console.log(player)
    const playerItems = sortItems(player.items)
    const dispatch = useDispatch()

    return (
        <div className='flexRow game-player-parent'>
            <div className='flexColumn game-player-hero' >
                <img src={heroNames[player.hero] ? heroNames[player.hero].image : ''} className='game-hero-image' />
                <div className='flexRow game-player-shards-parent'>
                    {player.upgrades ? player.upgrades.map((shard, key) => {
                        return <img
                            key={key}
                            className='game-player-shards'
                            src={Shards[shard] ? Abilities[Shards[shard].skill].link : ''}
                            onMouseEnter={(e) => dispatch(setHoverElement('shard', e, shard))}
                            onMouseLeave={() => dispatch(removeHoverElement())}
                        />
                    }) : null}
                </div>
            </div>
            <div className='flexColumn game-player-detailed'>
                <div className='flexRow game-player-items'>
                    {playerItems[0].map((item, ind) => {
                        return (
                            // eslint-disable-next-line
                            Items[item] ? <img src={Items[item].link} className='game-item-image' key={ind} /> : process.env.NODE_ENV === 'development' ? <span className='game-item-emptyslot' key={ind}>{item}</span> : null
                        )
                    })}
                </div>
                <div className='flexRow game-player-backpack'>
                    {playerItems[1].map((item, ind) => {
                        return (
                            // eslint-disable-next-line
                            Items[item] ? <img src={Items[item].link} className='game-item-image' key={ind} /> : process.env.NODE_ENV === 'development' ? <span className='game-item-emptyslot' key={ind}>{item}</span> : null
                        )
                    })}
                </div>
                <div className='game-player-neutral-parent'>
                    {Items[playerItems[2]] ? <img src={Items[playerItems[2]].link} className='game-item-image game-player-neutral' />
                        : <span className='game-item-emptyslot'>{playerItems[2]}</span>
                    }
                </div>
            </div>
            <div className={`flexRow game-player-stats-parent ${expanded || individualGame ? 'active' : ''}`}>
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
}

export default Player