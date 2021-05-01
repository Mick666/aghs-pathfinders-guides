import React from 'react'
import { Icon } from 'semantic-ui-react'
import Abilities from '../../data/Abilities'
import Shards from '../../data/Shards'

export const HeroStatsSorting = ({ sortFunc, setShardSorting, shardSorting, stats, index }) => {
    return (
        <tr>
            <th className='leftAlignText' onClick={() => sortFunc(setShardSorting, 'SHARDS', 'heroes')} style={{ paddingLeft: '10px' }}>
                Shard
                <Icon name={shardSorting[0] !== 'SHARDS' ? 'sort' : shardSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
            </th>
            <th className='shardStatsEl' onClick={() => sortFunc(setShardSorting, 'PICKS', false, stats[index].singleHeroStats.totalGames)}>
                Pick rate
                <Icon name={shardSorting[0] !== 'PICKS' ? 'sort' : shardSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
            </th>
            <th className='shardStatsEl' onClick={() => sortFunc(setShardSorting, 'WR')}>
                Win rate
                <Icon name={shardSorting[0] !== 'WR' ? 'sort' : shardSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
            </th>
            <th className='shardStatsEl' onClick={() => sortFunc(setShardSorting, 'VICS')}>
                Victories
                <Icon name={shardSorting[0] !== 'VICS' ? 'sort' : shardSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
            </th>
            <th className='shardStatsEl' onClick={() => sortFunc(setShardSorting, 'GAMES')}>
                Total times picked
                <Icon name={shardSorting[0] !== 'GAMES' ? 'sort' : shardSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
            </th>
        </tr>
    )
}

export const HeroStatsShards = ({ shard, shardStats, stats, index }) => {
    return (
        <tr>
            <td className='shardStatsShardParent'>
                {!Shards[shard] ? shard ? shard.shard : '' :
                    <div className='shardStatsShard'>
                        <img className='shardStatsImage' src={Abilities[Shards[shard].skill].link} />
                        <div className='shardStatsText'>
                            <b className='hero-stats-title'>{Shards[shard].name}</b>
                            <div className='hero-stats-description'>{Shards[shard].description}</div>
                        </div>
                    </div>
                }
            </td>
            <td className='shardStatsEl'>{shardStats ? (shardStats.totalGames / stats[index].singleHeroStats.totalGames * 100).toString().slice(0, 4) + '%' : '0%'}</td>
            <td className='shardStatsEl'>{shardStats ? (shardStats.victories / shardStats.totalGames * 100).toString().slice(0, 4) + '%' : '0%'}</td>
            <td className='shardStatsEl'>{shardStats ? shardStats.victories : 0}</td>
            <td className='shardStatsEl'>{shardStats ? shardStats.totalGames : 0}</td>
        </tr>
    )
}