import React, { useState } from 'react'
import { Icon, Loader } from 'semantic-ui-react'
import { heroNames } from '../../Heroes'
import Shards from '../../Shards'
import Abilities from '../../Abilities'
import sortStats from '../../utils/sortStats'

const HeroStats = ({ currentView, stats, currentTab, setStats, statsQuery }) => {
    const difficultyToIndex = { 0: 'Grand Magus', 1: 'Apex Mage', 2: 'Sorcerer' }
    const [shardSorting, setShardSorting] = useState(['WR', 'DESC'])

    console.log(stats)

    if (!stats) {
        return <div className='displayedGuide'><Loader active inverted>Loading</Loader></div>
    }

    function sortFunc(setSortedData, category, heroes) {
        sortStats(stats, statsQuery.data.heroStats, setStats, setSortedData, false, shardSorting, category, heroes)
    }

    console.log(stats)
    return (
        <div className={`${currentView === 'Stats' ? '' : 'hidden'} heroStatsContainer`}>
            {stats.map((difficulty, key) => {
                return (
                    <div className={`heroStatsDifficultyContainer ${currentTab === difficultyToIndex[key] ? '' : 'hidden'}`} key={key}>
                        <div className='heroStatsOverall flexRow'>
                            <div className='heroStats flexColumn'>
                                <span className='heroStatNumbers centerText'>{difficulty.singleHeroStats.victories}</span>
                                <span className='heroStatTitle'>Victories</span>
                            </div>
                            <div className='heroStats  flexColumn'>
                                <span className='heroStatNumbers centerText'>{(difficulty.singleHeroStats.victories / difficulty.singleHeroStats.defeats * 100).toString().slice(0, 4) + '%'}</span>
                                <span className='heroStatTitle'>Win Rate</span>
                            </div>
                            <div className='heroStats  flexColumn'>
                                <span className='heroStatNumbers centerText'>{(difficulty.singleHeroStats.deaths / difficulty.singleHeroStats.totalGames).toString().slice(0, 4)}</span>
                                <span className='heroStatTitle'>Average Deaths</span>
                            </div>
                            <div className='heroStats  flexColumn'>
                                <span className='heroStatNumbers centerText'>{difficulty.singleHeroStats.totalGames}</span>
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
                                    {[...difficulty.shardWinrates]
                                        .map((shard, ind) => {
                                            console.log(shard)
                                            return (
                                                <tr key={ind}
                                                    id={shard.shard}
                                                    className=''
                                                >
                                                    <td className='shardStatsShardParent'>{Shards[shard.shard] ?
                                                        <div className='shardStatsShard'>
                                                            <img className='shardStatsImage' src={Abilities[Shards[shard.shard].skill].link} />
                                                            <div className='shardStatsText'>
                                                                <b className='shardTitle leftAlignText'>{Shards[shard.shard].name}</b>
                                                                <div className={'leftAlignText'}>{Shards[shard.shard].description}</div>
                                                            </div>
                                                        </div> :
                                                        shard.shard
                                                    }
                                                    </td>
                                                    <td className='shardStatsEl'>{(shard.totalGames / difficulty.singleHeroStats.totalGames * 100).toString().slice(0, 4) + '%'}</td>
                                                    <td className='shardStatsEl'>{(shard.victories / shard.totalGames * 100).toString().slice(0, 4) + '%'}</td>
                                                    <td className='shardStatsEl'>{shard.victories}</td>
                                                    <td className='shardStatsEl'>{shard.totalGames}</td>
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