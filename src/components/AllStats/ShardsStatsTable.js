import React from 'react'
import { useDispatch } from 'react-redux'

import Shards from '../../data/Shards'
import Abilities from '../../data/Abilities'
import { heroNames } from '../../data/Heroes'
import { removeHoverElement, setHoverElement } from '../../redux/hoverReducer'

const ShardsStatsTable = ({ shard, heroTotalGames, ind }) => {
    if (!shard) return null
    const shardExists = Shards[shard.shard]
    const dispatch = useDispatch()
    return (
        <tr>
            <td
                className='shardStatsShardParent'
                onMouseEnter={(e) => dispatch(setHoverElement('shard', e, shard.shard))}
                onMouseLeave={() => dispatch(removeHoverElement())}
            >
                {shardExists ?
                    <div className='shardStatsShard'>
                        <img className='shardStatsImage' src={shardExists ? Abilities[Shards[shard.shard].skill].link : ''} />
                        <div className='shardStatsText'>
                            <b className='shardStatsTitle leftAlignText'>{Shards[shard.shard]?.name}</b>
                        </div>
                    </div> :
                    shard.shard
                }
            </td>
            <td className='shardStatsEl'>{heroNames[shard.hero] && heroNames[shard.hero].name ?
                (shard.totalGames / heroTotalGames[shard.hero][ind] * 100).toString().slice(0, 4) + '%' : shard.hero}</td>
            <td className='shardStatsEl'>{(shard.victories / shard.totalGames * 100).toString().slice(0, 4) + '%'}</td>
            <td className='shardStatsEl'>{shard.victories}</td>
            <td className='shardStatsEl'>{shard.totalGames}</td>
        </tr>
    )
}

export default ShardsStatsTable