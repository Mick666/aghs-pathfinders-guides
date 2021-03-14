import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { Loader } from 'semantic-ui-react'

import Shards from '../../data/Shards'
import Abilities from '../../data/Abilities'
import sortStats from '../../utils/sortStats'

const HeroStats = ({ currentView, stats, currentTab, setStats, statsQuery, hero }) => {
    const difficulties = ['Grand Magus', 'Apex Mage', 'Sorcerer']
    const [shardSorting, setShardSorting] = useState(['WR', 'DESC'])

    if (statsQuery.loading) return <Loader active inverted style={{ marginTop: '400px', marginLeft: '100px' }}>Loading</Loader>

    function sortFunc(setSortedData, category, heroes, totalGames, heroId) {
        const heroTotalGames = {}
        if (totalGames) heroTotalGames[heroId] = [totalGames]
        sortStats({
            stats: stats,
            rawData: statsQuery.data.heroStats,
            setStats: setStats,
            setSorting: setSortedData,
            shardSorting: shardSorting,
            category: category,
            heroes: heroes,
            heroTotalGames: heroTotalGames
        })
    }

    return (
        <div className={`${currentView === 'Stats' ? '' : 'hidden'} heroStatsContainer`}>
            {difficulties.map((difficulty, key) => {
                const shardOrdering = stats ? stats[key].shardWinrates.map(x => x.shard) : null
                return (
                    <div className={`heroStatsDifficultyContainer ${currentTab === difficulty ? '' : 'hidden'}`} key={key}>
                        <div className='heroStatsOverall flexRow'>
                            <div className='heroStats flexColumn'>
                                <span className='heroStatNumbers centerText'>{stats ? stats[key].singleHeroStats.victories : 0}</span>
                                <span className='heroStatTitle'>Victories</span>
                            </div>
                            <div className='heroStats  flexColumn'>
                                <span className='heroStatNumbers centerText'>{stats ? (stats[key].singleHeroStats.victories / stats[key].singleHeroStats.defeats * 100).toString().slice(0, 4) + '%' : '0%'}</span>
                                <span className='heroStatTitle'>Win Rate</span>
                            </div>
                            <div className='heroStats  flexColumn'>
                                <span className='heroStatNumbers centerText'>{stats ? (stats[key].singleHeroStats.deaths / stats[key].singleHeroStats.totalGames).toString().slice(0, 4) : 0}</span>
                                <span className='heroStatTitle'>Average Deaths</span>
                            </div>
                            <div className='heroStats  flexColumn'>
                                <span className='heroStatNumbers centerText'>{stats ? stats[key].singleHeroStats.totalGames : 0}</span>
                                <span className='heroStatTitle'>Total Games</span>
                            </div>
                        </div>
                        <div className='heroShardStatsContainer'>
                            <table className='statTable shardStatsEl'>
                                <tbody>
                                    <tr>
                                        <th className='leftAlignText leftSpacing' onClick={() => sortFunc(setShardSorting, 'SHARDS', 'heroes')} >
                                            Shard
                                            <Icon name={shardSorting[0] !== 'SHARDS' ? 'sort' : shardSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
                                        </th>
                                        <th className='shardStatsEl' onClick={() => sortFunc(setShardSorting, 'PICKS', false, stats[key].singleHeroStats.totalGames, hero.id)}>
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
                                    {[...hero.shards]
                                        .sort((a, b) => shardOrdering ? shardOrdering.indexOf(a) - shardOrdering.indexOf(b) : 0)
                                        .map((shard, ind) => {
                                            const shardStats = stats ? stats[key].shardWinrates.filter(x => x.shard === shard)[0] : null
                                            return (
                                                <tr key={ind}
                                                    id={shard}
                                                    className=''
                                                >
                                                    <td className='shardStatsShardParent'>{Shards[shard] ?
                                                        <div className='shardStatsShard'>
                                                            <img className='shardStatsImage' src={Abilities[Shards[shard].skill].link} />
                                                            <div className='shardStatsText'>
                                                                <b className='shardStatsTitle leftAlignText'>{Shards[shard].name}</b>
                                                                <div className={'leftAlignText'}>{Shards[shard].description}</div>
                                                            </div>
                                                        </div> :
                                                        shard.shard
                                                    }
                                                    </td>
                                                    <td className='shardStatsEl'>{shardStats ? (shardStats.totalGames / stats[key].singleHeroStats.totalGames * 100).toString().slice(0, 4) + '%' : '0%'}</td>
                                                    <td className='shardStatsEl'>{shardStats ? (shardStats.victories / shardStats.totalGames * 100).toString().slice(0, 4) + '%' : '0%'}</td>
                                                    <td className='shardStatsEl'>{shardStats ? shardStats.victories : 0}</td>
                                                    <td className='shardStatsEl'>{shardStats ? shardStats.totalGames : 0}</td>
                                                </tr>
                                            )
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HeroStats