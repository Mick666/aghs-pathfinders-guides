import React from 'react'
import { Icon } from 'semantic-ui-react'

const HeroStatsHeader = ({ sortFunc, setHeroSorting, heroSorting }) => {
    return (
        <tr>
            <th className='leftAlignText leftSpacing'>Hero</th>
            <th className='shardStatsEl'
                onClick={() => sortFunc(setHeroSorting, 'VICS', 'heroes')}
            >
                Victories
                <Icon name={heroSorting[0] !== 'VICS' ? 'sort' : heroSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
            </th>
            <th className='shardStatsEl'
                onClick={() => sortFunc(setHeroSorting, 'WR', 'heroes')}
            >
                Win rate
                <Icon name={heroSorting[0] !== 'WR' ? 'sort' : heroSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
            </th>
            <th className='shardStatsEl'
                onClick={() => sortFunc(setHeroSorting, 'DEATH', 'heroes')}
            >
                Average deaths
                <Icon name={heroSorting[0] !== 'DEATH' ? 'sort' : heroSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
            </th>
            <th className='shardStatsEl'
                onClick={() => sortFunc(setHeroSorting, 'GAMES', 'heroes')}
            >
                Total games
                <Icon name={heroSorting[0] !== 'GAMES' ? 'sort' : heroSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
            </th>
        </tr>
    )
}

export default HeroStatsHeader