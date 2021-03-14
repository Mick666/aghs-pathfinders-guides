import React from 'react'
import Shards from '../../data/Shards'
import Abilities from '../../data/Abilities'
import { heroNames } from '../../data/Heroes'

const ShardsStatsTable = ({ shard, heroTotalGames, ind }) => {
    if (!shard) return null
    const shardExists = Shards[shard.shard]
    return (
        <tr
            id={shard.shard}
            onMouseOver={(e) => e.currentTarget.firstElementChild.firstElementChild.children[1].children[1].className = e.currentTarget.firstElementChild.firstElementChild.children[1].children[1].className.replace(/hidden/g, '')}
            onMouseLeave={(e) => e.currentTarget.firstElementChild.firstElementChild.children[1].children[1].className += ' hidden'}
        >
            <td className='shardStatsShardParent'>{shardExists ?
                <div className='shardStatsShard'>
                    <img className='shardStatsImage' src={shardExists ? Abilities[Shards[shard.shard].skill].link : ''} />
                    <div className='shardStatsText'>
                        <b className='shardStatsTitle leftAlignText'>{Shards[shard.shard]?.name}</b>
                        <div className={'hidden leftAlignText'}>{Shards[shard.shard]?.description}</div>
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