import React from 'react'
import { Icon } from 'semantic-ui-react'

const ShardsStatsHeader = ({ setShardSorting, shardSorting, sortFunc }) => {
    return (
        <tr>
            <th className='leftAlignText leftSpacing' onClick={() => sortFunc(setShardSorting, 'SHARDS', 'heroes')} >
                Shard
                <Icon name={shardSorting[0] !== 'SHARDS' ? 'sort' : shardSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
            </th>
            <th className='shardStatsEl' onClick={() => sortFunc(setShardSorting, 'PICKS')}>
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

export default ShardsStatsHeader