import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { HERO_STATS } from '../../graphql/queries'
import { Loader } from 'semantic-ui-react'

import Heroes from '../../data/Heroes'
import sortStats from '../../utils/sortStats'
import StatsHeader from './StatsHeader'
import HeroStatsHeader from './HeroStatsHeader'
import HeroStatsTable from './HeroStatsTable'
import ShardsStatsHeader from './ShardsStatsHeader'
import ShardsStatsTable from './ShardsStatsTable'

const AllStats = () => {
    const [visibleStats, setVisibleStats] = useState('shards')
    const [visibleDifficulty, setVisibleDifficulty] = useState(0)
    const [shardSorting, setShardSorting] = useState(['WR', 'DESC'])
    const [heroSorting, setHeroSorting] = useState(['WR', 'DESC'])
    const [stats, setStats] = useState(null)
    const results = useQuery(HERO_STATS)
    const heroTotalGames = {}
    const heroIDs = Heroes.reduce((obj, item) => (obj[item.name] = { ...item }, obj), {})

    function filterShards(heroes) {
        const filteredStats = heroes.length === 0 ? [...stats].map((difficulty, index) => {
            return {
                ...difficulty,
                shardWinrates: [...results.data.allMatchData][index].shardWinrates
            }
        }) : [...stats].map((difficulty, index) => {
            return {
                ...difficulty,
                shardWinrates: [...results.data.allMatchData][index].shardWinrates.filter(shard => heroes.includes(shard.hero))
            }
        })
        sortStats({
            stats: filteredStats,
            rawData: results.data.allMatchData,
            setStats: setStats,
            setSorting: setShardSorting,
            heroSorting: heroSorting,
            shardSorting: shardSorting,
            category: shardSorting[0],
            filterSort: true
        })
    }

    function sortFunc(setSortedData, category, heroes) {
        sortStats({
            stats: stats,
            rawData: results.data.allMatchData,
            setStats: setStats,
            setSorting: setSortedData,
            heroSorting: heroSorting,
            shardSorting: shardSorting,
            category: category,
            heroes: heroes,
            heroTotalGames: heroTotalGames
        })
    }

    useEffect(() => {
        if (results.data) {
            const rawStats = [...results.data.allMatchData].map(difficulty => {
                return {
                    heroAsArray: [...difficulty.heroAsArray].sort((a, b) => (b.victories / b.defeats) - (a.victories / a.defeats)),
                    shardWinrates: [...difficulty.shardWinrates].sort((a, b) => (b.victories / b.defeats) - (a.victories / a.defeats))
                }
            })
            setStats(rawStats)
        }
    }, [results])

    if (results.loading || !stats) {
        return (
            <div>
                <Loader active inverted>Loading</Loader>
            </div>
        )
    } else {
        results.data.allMatchData.forEach(difficulty => difficulty.heroAsArray.forEach(hero => {
            if (heroTotalGames[hero.heroId]) heroTotalGames[hero.heroId].push(hero.totalGames)
            else heroTotalGames[hero.heroId] = [hero.totalGames]
        }))
    }
    return (
        <div className='statsParent'>
            <div className='statsTabs'>
                <div className={`statTab ${visibleStats === 'hero' ? 'active' : ''}`} onClick={() => setVisibleStats('hero')}>Heroes</div>
                <div className={`statTab ${visibleStats === 'shards' ? 'active' : ''}`} onClick={() => setVisibleStats('shards')}>Legendary Shards</div>
            </div>
            <div className='tabContent'>
                <StatsHeader visibleStats={visibleStats} setVisibleDifficulty={setVisibleDifficulty} filterShards={filterShards} />
                <div className={visibleStats === 'hero' ? '' : 'hidden'}>
                    {stats.map((difficulty, key) => {
                        return (
                            <div key={key} className={Number(visibleDifficulty) === key ? '' : 'hidden'}>
                                <table className='statTable shardStatsEl' >
                                    <tbody>
                                        <HeroStatsHeader sortFunc={sortFunc} setHeroSorting={setHeroSorting} heroSorting={heroSorting} />
                                        {[...difficulty.heroAsArray].map((x, ind) => <HeroStatsTable key={ind} hero={x} heroIDs={heroIDs} />)}
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}
                </div>
                <div className={visibleStats === 'shards' ? '' : 'hidden'} >
                    {stats.map((difficulty, key) => {
                        return (
                            <div className={Number(visibleDifficulty) === key ? '' : 'hidden'} key={key}>
                                <table className='statTable shardStatsEl'>
                                    <tbody>
                                        <ShardsStatsHeader sortFunc={sortFunc} setShardSorting={setShardSorting} shardSorting={shardSorting} />
                                        {difficulty.shardWinrates
                                            .map((shard, ind) =>
                                                <ShardsStatsTable
                                                    key={ind} ind={key}
                                                    shard={shard}
                                                    heroTotalGames={heroTotalGames}
                                                />
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllStats