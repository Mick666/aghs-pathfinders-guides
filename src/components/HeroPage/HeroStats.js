import React, { useState } from 'react'
import { Loader } from 'semantic-ui-react'

import sortStats from '../../utils/sortStats'
import HeroStatsHeader, { EmptyHeroStatsHeader } from './HeroStatsHeader'
import { HeroStatsShards, HeroStatsSorting } from './HeroStatsBody'

const HeroStats = ({ currentView, stats, currentTab, setStats, statsQuery, hero }) => {
    const difficulties = ['Grand Magus', 'Apex Mage', 'Sorcerer']
    const [shardSorting, setShardSorting] = useState(['WR', 'DESC'])

    if (statsQuery.loading) return <Loader active inverted style={{ marginTop: '400px', marginLeft: '100px' }} className={`${currentView === 'Stats' ? '' : 'hidden'}`} >Loading</Loader>

    function sortFunc(setSortedData, category, heroes, totalGames) {
        const heroTotalGames = {}
        if (totalGames) heroTotalGames[hero.id] = [totalGames]
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
                        {stats ? <HeroStatsHeader stats={stats[key]}/> : <EmptyHeroStatsHeader />}
                        <div className='heroShardStatsContainer'>
                            <table className='statTable shardStatsEl'>
                                <tbody>
                                    <HeroStatsSorting sortFunc={sortFunc} setShardSorting={setShardSorting} shardSorting={shardSorting} stats={stats} index={key}/>
                                    {[...hero.shards]
                                        .sort((a, b) => shardOrdering ? shardOrdering.indexOf(a) - shardOrdering.indexOf(b) : 0)
                                        .map((shard, ind) => {
                                            const shardStats = stats ? stats[key].shardWinrates.filter(x => x.shard === shard)[0] : null
                                            return <HeroStatsShards shard={shard} shardStats={shardStats} stats={stats} index={key} key={ind}/>
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