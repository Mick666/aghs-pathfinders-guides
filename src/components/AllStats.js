import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { HERO_STATS } from '../graphql/queries'
import { Icon, Loader } from 'semantic-ui-react'
import Select from 'react-select'

import Heroes, { heroNames } from '../Heroes'
import Shards from '../Shards'
import Abilities from '../Abilities'
import sortStats from '../utils/sortStats'

const AllStats = () => {
    const [visibleStats, setVisibleStats] = useState('shards')
    const [visibleDifficulty, setVisibleDifficulty] = useState(0)
    const [shardSorting, setShardSorting] = useState(['WR', 'DESC'])
    const [heroSorting, setHeroSorting] = useState(['WR', 'DESC'])
    const [stats, setStats] = useState(null)
    const results = useQuery(HERO_STATS)
    const [hoveredElement, setHoveredElement] = useState(null)

    function handleHover(event) {
        if (event.target.id.length > 0) setHoveredElement(event.target.id)
        else if (event.target.parentElement.id.length > 0) setHoveredElement(event.target.parentElement.id)
        else if (event.target.parentElement.parentElement.id.length > 0) setHoveredElement(event.target.parentElement.parentElement.id)
        else if (event.target?.parentElement?.parentElement?.parentElement.id.length > 0) setHoveredElement(event.target.parentElement.parentElement.parentElement.id)
        else if (event.target?.parentElement?.parentElement?.parentElement?.parentElement.id.length > 0) setHoveredElement(event.target.parentElement.parentElement.parentElement.parentElement.id)
    }
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
        console.log(filteredStats, results)
        sortStats(filteredStats, results.data.allMatchData, setStats, setShardSorting, heroSorting, shardSorting, shardSorting[0], false, true)
    }

    function sortFunc(setSortedData, category, heroes) {
        sortStats(stats, results.data.allMatchData, setStats, setSortedData, heroSorting, shardSorting, category, heroes)
    }

    useEffect(() => {
        if (results.data) {
            const rawStats = [...results.data.allMatchData].map(difficulty => {
                return {
                    heroAsArray: [...difficulty.heroAsArray].sort((a, b) => (b.victories / b.defeats) - (a.victories / a.defeats)),
                    shardWinrates: [...difficulty.shardWinrates].sort((a, b) => (b.victories / b.defeats) - (a.victories / a.defeats))
                }
            })
            console.log(rawStats)
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
        for (let key in heroNames) {
            if (key === 'Phoenix') continue
            heroNames[key].totalGames = [
                [...results.data.allMatchData][0].heroAsArray.filter(hero => hero.hero === heroNames[key].name)[0].totalGames,
                [...results.data.allMatchData][1].heroAsArray.filter(hero => hero.hero === heroNames[key].name)[0].totalGames,
                [...results.data.allMatchData][2].heroAsArray.filter(hero => hero.hero === heroNames[key].name)[0].totalGames,
            ]
        }
    }
    return (
        <div className='statsParent'>
            <div className='statsTabs'>
                <div className={`statTab ${visibleStats === 'hero' ? 'active' : ''}`} onClick={() => setVisibleStats('hero')}>Heroes</div>
                <div className={`statTab ${visibleStats === 'shards' ? 'active' : ''}`} onClick={() => setVisibleStats('shards')}>Legendary Shards</div>
            </div>
            <div className='tabContent'>
                <div className='statsHeader'>
                    <div className='statsSelectors'>
                        <div className={`statsDifficultyFilterParent ${visibleStats === 'shards' ? '' : 'headerMargin'}`}>
                            <h4>Difficulty</h4>
                            <Select
                                name='heroFilter'
                                options={[{ value: 0, label: 'Grand Magus' }, { value: 1, label: 'Apex Mage' }, { value: 2, label: 'Grand Magus' }]}
                                defaultValue={ { value: 0, label: 'Grand Magus' }}
                                onChange={(e) => setVisibleDifficulty(e.value)}
                                classNamePrefix='statsDifficultyFilter'
                                className='statsDifficultyFilter'
                            />
                        </div>
                        <div className={`statsHeroFilterParent ${visibleStats === 'shards' ? '' : 'hidden'}`}>
                            <h4>Heroes</h4>
                            <Select
                                isMulti
                                name='heroFilter'
                                options={Heroes.map(hero => { return { value: hero.id, label: hero.name } })}
                                onChange={(e) => filterShards(e.map(value => value.value))}
                                placeholder='Filter shards by hero'
                                classNamePrefix='statsHeroFilter'
                                className='statsHeroFilter'
                            />
                        </div>
                    </div>
                </div>
                <div className={visibleStats === 'hero' ? '' : 'hidden'}>
                    {stats.map((difficulty, key) => {
                        return (
                            <div key={key} className={Number(visibleDifficulty) === key ? '' : 'hidden'}>
                                <table className='statTable shardStatsEl' >
                                    <tbody>
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
                                        {[...difficulty.heroAsArray].map((x, ind) => {
                                            return (
                                                <tr key={ind}>
                                                    <td className='shardStatsEl'>
                                                        <div className='shardStatsShard'>
                                                            <img className='heroStatsImage' src={heroIDs[x.hero].image} />
                                                            <b className='shardTitle leftAlignText'>{x.hero}</b>
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
                    {stats.map((difficulty, key) => {
                        return (
                            <div className={Number(visibleDifficulty) === key ? '' : 'hidden'} key={key}>
                                <table className='statTable shardStatsEl' onMouseLeave={() => setHoveredElement(null)}>
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
                                                return (
                                                    <tr key={ind}
                                                        id={shard.shard}
                                                        onMouseEnter={(e) => handleHover(e)}
                                                        className=''
                                                    >
                                                        <td className='shardStatsShardParent'>{Shards[shard.shard] ?
                                                            <div className='shardStatsShard'>
                                                                <img className='shardStatsImage' src={Abilities[Shards[shard.shard].skill].link} />
                                                                <div className='shardStatsText'>
                                                                    <b className='shardTitle leftAlignText'>{Shards[shard.shard].name}</b>
                                                                    <div className={`${hoveredElement === shard.shard ? '' : 'hidden'} leftAlignText`}>{Shards[shard.shard].description}</div>
                                                                </div>
                                                            </div> :
                                                            shard.shard
                                                        }
                                                        </td>
                                                        <td className='shardStatsEl'>{heroNames[shard.hero] && heroNames[shard.hero].name ?
                                                            (shard.totalGames / heroNames[shard.hero].totalGames[key] * 100).toString().slice(0, 4) + '%' : shard.hero}</td>
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
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllStats