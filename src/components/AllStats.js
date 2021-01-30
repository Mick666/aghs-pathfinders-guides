import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { HERO_STATS, SHARD_STATS } from '../graphql/queries'
import Heroes from '../Heroes'
import Shards from '../Shards'
import Abilities from '../Abilities'

const difficultyHeader = { 0: 'Grand Magus Statistics', 1: 'Apex Mage Statistics', 2: 'Sorcerer Statistics' }
const heroNames = Heroes.reduce((obj, item) => (obj[item.id] = { ...item }, obj), {})

const ShardDifficultyTable = ({ difficulty, index, visibleDifficulty }) => {
    const [hoveredElement, setHoveredElement] = useState(null)

    function handleHover(event) {
        // console.log(event.target)
        if (event.target.id.length > 0) setHoveredElement(event.target.id)
        else if (event.target.parentElement.id.length > 0) setHoveredElement(event.target.parentElement.id)
        else if (event.target.parentElement.parentElement.id.length > 0) setHoveredElement(event.target.parentElement.parentElement.id)
        else if (event.target?.parentElement?.parentElement?.parentElement.id.length > 0) setHoveredElement(event.target.parentElement.parentElement.parentElement.id)
        else if (event.target?.parentElement?.parentElement?.parentElement?.parentElement.id.length > 0) setHoveredElement(event.target.parentElement.parentElement.parentElement.parentElement.id)
    }
    return (
        <div className={Number(visibleDifficulty) === index ? '' : 'hidden'}>
            <table className='statTable shardStatsEl' onMouseLeave={() => setHoveredElement(null)}>
                <tbody>
                    <tr>
                        <th className='leftAlignText leftSpacing'>Shard</th>
                        <th className='shardStatsEl'>Pick rate</th>
                        <th className='shardStatsEl'>Win rate</th>
                        <th className='shardStatsEl'>Victories</th>
                        <th className='shardStatsEl'>Total times picked</th>
                    </tr>
                    {[...difficulty.shardWinrates]
                        .sort((a, b) => (b.victories / b.defeats) - (a.victories / a.defeats))
                        .map((shard, ind) => {
                            return (
                                <tr key={ind}
                                    id={shard.shard}
                                    onMouseEnter={(e) => handleHover(e)}
                                    className=''
                                >
                                    <td className='shardStatsShardParent'>{Shards[shard.shard] ?
                                        <div className='shardStatsShard'>
                                            <img className='shardStatsImage' src={Abilities[Shards[shard.shard].skill].link} />
                                            <div>
                                                <div className='shardTitle leftAlignText'>{Shards[shard.shard].name}</div>
                                                <div className={`${hoveredElement === shard.shard ? '' : 'hidden'} leftAlignText`}>{Shards[shard.shard].description}</div>
                                            </div>
                                        </div> :
                                        shard.shard
                                    }
                                    </td>
                                    <td className='shardStatsEl'>{heroNames[shard.hero] && heroNames[shard.hero].name ? (shard.totalGames / heroNames[shard.hero].totalGames[index] * 100).toString().slice(0, 4) + '%' : shard.hero}</td>
                                    <td className='shardStatsEl'>{(shard.victories / shard.totalGames * 100).toString().slice(0, 4) + '%'}</td>
                                    <td className='shardStatsEl'>{shard.victories}</td>
                                    <td className='shardStatsEl'>{shard.totalGames}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}

const AllStats = () => {
    const [visibleStats, setVisibleStats] = useState('hero')
    const [visibleDifficulty, setVisibleDifficulty] = useState(0)
    const heroStats = useQuery(HERO_STATS)
    const shardStats = useQuery(SHARD_STATS)
    // console.log(shardStats)
    console.log(heroStats)
    const heroIDs = Heroes.reduce((obj, item) => (obj[item.name] = { ...item }, obj), {})

    if (heroStats.loading || shardStats.loading) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        for (let key in heroNames) {
            heroNames[key].totalGames = [
                heroStats.data.allMatchData[0].heroAsArray.filter(hero => hero.hero === heroNames[key].name)[0].totalGames,
                heroStats.data.allMatchData[1].heroAsArray.filter(hero => hero.hero === heroNames[key].name)[0].totalGames,
                heroStats.data.allMatchData[2].heroAsArray.filter(hero => hero.hero === heroNames[key].name)[0].totalGames,
            ]
        }
    }
    return (
        <div className='statsParent'>
            <div className='statsHeader'>
                <h4 className='centerText bottomSpacing topSpacing statsTitle'>{difficultyHeader[visibleDifficulty]}</h4>
                <div className='statsSelectors'>
                    <label>
                        What stats do you want to view?
                        <select onChange={(e) => setVisibleStats(e.target.value)} className='statsSelect'>
                            <option value='hero'>Hero Stats</option>
                            <option value='shards'>Shard Stats</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        What difficulty do you want to view?
                        <select onChange={(e) => setVisibleDifficulty(e.target.value)} className='statsSelect'>
                            <option value={0}>Grand Magus</option>
                            <option value={1}>Apex Mage</option>
                            <option value={2}>Sorcerer</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className={visibleStats === 'hero' ? '' : 'hidden'}>
                {heroStats.data.allMatchData.map((difficulty, key) => {
                    return (
                        <div key={key} className={Number(visibleDifficulty) === key ? '' : 'hidden'}>
                            <table className='statTable shardStatsEl' >
                                <tbody>
                                    <tr>
                                        <th className='leftAlignText leftSpacing'>Hero</th>
                                        <th className='shardStatsEl'>Victories</th>
                                        <th className='shardStatsEl'>Win rate</th>
                                        <th className='shardStatsEl'>Average deaths</th>
                                        <th className='shardStatsEl'>Total games</th>
                                    </tr>
                                    {[...difficulty.heroAsArray].sort((a, b) => (b.victories / b.defeats) - (a.victories / a.defeats)).map((x, ind) => {
                                        return (
                                            <tr key={ind}>
                                                <td className='shardStatsEl'>
                                                    <div className='shardStatsShard'>
                                                        <img className='heroStatsImage' src={heroIDs[x.hero].image} />
                                                        <div className='shardTitle leftAlignText'>{x.hero}</div>
                                                    </div>
                                                </td>
                                                <td className='shardStatsEl'>{x.victories}</td>
                                                <td className='shardStatsEl'>{(x.victories / x.defeats * 100).toString().slice(0, 4) + '%'}</td>
                                                <td className='shardStatsEl'>{(x.deaths / x.totalGames).toString().slice(0, 4)}</td>
                                                <td className='shardStatsEl'>{x.totalGames}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )
                })}
            </div>
            <div className={visibleStats === 'shards' ? '' : 'hidden'}>
                {shardStats.data.allMatchData.map((difficulty, key) => {
                    // .sort((a, b) => a.hero.localeCompare(b.hero))
                    return (
                        <ShardDifficultyTable key={key} index={key} difficulty={difficulty} visibleDifficulty={visibleDifficulty} />
                    )
                })}
            </div>
        </div>
    )
}

export default AllStats