import React from 'react'
import { useSelector } from 'react-redux'

import Shards from '../data/Shards'
import Abilities from '../data/Abilities'
import { heroNames } from '../data/Heroes'
import Items from '../data/Items'
import sortItems from '../utils/sortItems'

export const HoverShard = ({ shard }) => {
    if (!Shards[shard]) return null
    const { position } = useSelector(state => state)
    return (
        <div style={{ top: `${position?.position?.top + 25}px`, left: `${position?.position?.left + 25}px` }} className='hover-root hover-shard flexColumn'>
            <div className='hover-parent flexRow'>
                <img src={Abilities[Shards[shard].skill].link} className='hover-shard-image' />
                <div className='flexColumn hover-details'>
                    <span className='hover-shard-name'>{Shards[shard].name}</span>
                    <span className='hover-shard-ability'>Upgrades: {Abilities[Shards[shard].skill].name}</span>
                    <span className='hover-shard-description'>{Shards[shard].description}</span>
                </div>
            </div>
        </div>
    )
}

// export const HoverItem = ({ item, position }) => {

// }

export const HoverPlayer = ({ player }) => {
    if (!player) return null
    const playerItems = sortItems(player.items)
    const { position } = useSelector(state => state)
    return (
        <div className='hover-root hover-player flexColumn' style={{ top: `${position?.position?.top + 25}px`, left: `${position?.position?.left + 25}px` }}>
            <div className='flexRow center-align hover-player-items'>
                <img src={heroNames[player.hero] ? heroNames[player.hero].image : ''} className='hover-player-image' />
                <div className='flexColumn game-player-detailed'>
                    <div className='flexRow game-player-items'>
                        {playerItems[0].map((item, ind) => {
                            return (
                                // eslint-disable-next-line
                                Items[item] ? <img src={Items[item].link} className='game-item-image' key={ind} /> : <span className='game-item-emptyslot' key={ind}>{process.env.NODE_ENV === 'development' ? item : ''}</span>
                            )
                        })}
                    </div>
                    <div className='flexRow game-player-backpack'>
                        {playerItems[1].map((item, ind) => {
                            return (
                                // eslint-disable-next-line
                                Items[item] ? <img src={Items[item].link} className='game-item-image' key={ind} /> : <span className='game-item-emptyslot' key={ind}>{process.env.NODE_ENV === 'development' ? item : ''}</span>
                            )
                        })}
                    </div>
                    <div className='game-player-neutral-parent'>
                        {Items[playerItems[2]] ? <img src={Items[playerItems[2]].link} className='game-item-image game-player-neutral' />
                            : <span className='game-item-emptyslot'>{playerItems[2]}</span>
                        }
                    </div>
                </div>
            </div>
            <div className='flexColumn'>
                {player.upgrades.map((shard, key) => {
                    // console.log(shard)
                    return (
                        <div className='flexRow hover-shard-parent' key={key}>
                            <img src={Abilities[Shards[shard]?.skill]?.link} className='hover-shard-image' />
                            <div className='flexColumn hover-details'>
                                <span className='hover-shard-name'>{Shards[shard]?.name ? Shards[shard]?.name : shard}</span>
                                <span className='hover-shard-ability'>Upgrades: {Abilities[Shards[shard]?.skill]?.name}</span>
                                <span className='hover-shard-description'>{Shards[shard]?.description}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const HoverElement = () => {

    const { element } = useSelector(state => state)

    switch (element?.type) {
        case 'shard':
            return <HoverShard shard={element.data} />
        case 'player':
            return <HoverPlayer player={element.data} />
        default:
            return null
    }
}

export default HoverElement