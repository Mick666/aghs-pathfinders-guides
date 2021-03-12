import React from 'react'
import Shards from '../data/Shards'
import Abilities from '../data/Abilities'

export const HoverShard = ({ shard, position }) => {
    if (!Shards[shard]) return null
    return (
        <div style={{ top: `${position?.top + 25}px`, left: `${position?.left + 25}px` }} className='hover-root hover-shard flexColumn'>
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