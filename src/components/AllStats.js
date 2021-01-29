import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { HERO_STATS, SHARD_STATS } from '../graphql/queries'

const AllStats = () => {
    const [visibleStats, setVisibleStats] = useState('hero')
    const [visibleDifficulty, setVisibleDifficulty] = useState(0)
    const heroStats = useQuery(HERO_STATS)
    const shardStats = useQuery(SHARD_STATS)
    const difficultyHeader = { 0: 'Grand Magus', 1: 'Apex Mage', 2: 'Sorcerer' }
    console.log(heroStats)
    // console.log(shardStats)
    console.log(visibleDifficulty)

    if (heroStats.loading || shardStats.loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div className='statsParent'>
            <label>
                What stats do you want to view?
                <select onChange={(e) => setVisibleStats(e.target.value)}>
                    <option value='hero'>Hero Stats</option>
                    <option value='shards'>Shard Stats</option>
                </select>
            </label>
            <br />
            <label>
                What difficulty do you want to view?
                <select onChange={(e) => setVisibleDifficulty(e.target.value)}>
                    <option value={0}>Grand Magus</option>
                    <option value={1}>Apex Mage</option>
                    <option value={2}>Sorcerer</option>
                </select>
            </label>
            <div className={visibleStats === 'hero' ? '' : 'hidden'}>
                {heroStats.data.allMatchData.map((difficulty, key) => {
                    return (
                        <div key={key} className={Number(visibleDifficulty) === key ? '' : 'hidden'}>
                            <h4 className='centerText bottomSpacing topSpacing'>{difficultyHeader[key]}</h4>
                            <table className='statTable'>
                                <tbody>
                                    <tr>
                                        <th>Hero</th>
                                        <th>Victories</th>
                                        <th>Win rate</th>
                                        <th>Average deaths</th>
                                        <th>Total games</th>
                                    </tr>
                                    {[...difficulty.heroAsArray].sort((a, b) => (b.victories / b.defeats) - (a.victories / a.defeats)).map((x, ind) => {
                                        return (
                                            <tr key={ind}>
                                                <td>{x.hero}</td>
                                                <td>{x.victories}</td>
                                                <td>{(x.victories / x.defeats * 100).toString().slice(0, 4) + '%'}</td>
                                                <td>{(x.deaths / x.totalGames).toString().slice(0, 4)}</td>
                                                <td>{x.totalGames}</td>
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
                    return (
                        <div key={key} className={Number(visibleDifficulty) === key ? '' : 'hidden'}>
                            <h4 className='centerText bottomSpacing topSpacing'>{difficultyHeader[key]}</h4>
                            <table className='statTable'>
                                <tbody>
                                    <tr>
                                        <th>Shard</th>
                                        <th>Pick rate</th>
                                        <th>Win rate</th>
                                        <th>Victories</th>
                                        <th>Total times picked</th>
                                        <th>Hero</th>
                                    </tr>
                                    {[...difficulty.shardWinrates].sort((a, b) => (b.victories / b.defeats) - (a.victories / a.defeats)).map((x, ind) => {
                                        const shardHero = heroStats.data.allMatchData[key].heroAsArray.filter(hero => hero.id === x.hero)[0]
                                        return (
                                            <tr key={ind}>
                                                <td>{x.shard}</td>
                                                <td>{shardHero ? (x.totalGames / shardHero.totalGames * 100).toString().slice(0, 4) + '%' : x.hero}</td>
                                                <td>{(x.victories / x.defeats * 100).toString().slice(0, 4) + '%'}</td>
                                                <td>{x.victories}</td>
                                                <td>{x.totalGames}</td>
                                                <td>{x.hero}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllStats