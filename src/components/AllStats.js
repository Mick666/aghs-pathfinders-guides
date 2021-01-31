import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { HERO_STATS } from '../graphql/queries'
import { Icon } from 'semantic-ui-react'

import Heroes from '../Heroes'
import Shards from '../Shards'
import Abilities from '../Abilities'


const AllStats = () => {
    const [visibleStats, setVisibleStats] = useState('hero')
    const [heroFilter, setHeroFilter] = useState(null)
    const [visibleDifficulty, setVisibleDifficulty] = useState(0)
    const [shardSorting, setShardSorting] = useState(['WR', 'DESC'])
    const [heroSorting, setHeroSorting] = useState(['WR', 'DESC'])
    const [stats, setStats] = useState(null)
    const results = useQuery(HERO_STATS)
    const [hoveredElement, setHoveredElement] = useState(null)

    const difficultyHeader = { 0: 'Grand Magus Statistics', 1: 'Apex Mage Statistics', 2: 'Sorcerer Statistics' }
    const heroNames = Heroes.reduce((obj, item) => (obj[item.id] = { ...item }, obj), {})

    function handleHover(event) {
        // console.log(event.target)
        if (event.target.id.length > 0) setHoveredElement(event.target.id)
        else if (event.target.parentElement.id.length > 0) setHoveredElement(event.target.parentElement.id)
        else if (event.target.parentElement.parentElement.id.length > 0) setHoveredElement(event.target.parentElement.parentElement.id)
        else if (event.target?.parentElement?.parentElement?.parentElement.id.length > 0) setHoveredElement(event.target.parentElement.parentElement.parentElement.id)
        else if (event.target?.parentElement?.parentElement?.parentElement?.parentElement.id.length > 0) setHoveredElement(event.target.parentElement.parentElement.parentElement.parentElement.id)
    }
    // console.log(shardStats)
    console.log(stats)
    const heroIDs = Heroes.reduce((obj, item) => (obj[item.name] = { ...item }, obj), {})

    function sortStats(category, heroes) {
        switch (category) {
        case 'VICS':
            if (heroes && heroSorting[0] !== 'VICS' || !heroes && shardSorting[0] !== 'VICS') {
                const sortedStats = [...stats].map(difficulty => {
                    return heroes ?
                        {
                            ...difficulty,
                            heroAsArray: [...difficulty.heroAsArray].sort((a, b) => b.victories - a.victories)
                        } :
                        {
                            ...difficulty,
                            shardWinrates: [...difficulty.shardWinrates].sort((a, b) => b.victories - a.victories)
                        }
                })
                setStats(sortedStats)
                heroes ? setHeroSorting(['VICS', 'DESC']) : setShardSorting(['VICS', 'DESC'])
            } else if (heroes && heroSorting[1] === 'DESC' || !heroes && shardSorting[1] === 'DESC') {
                const sortedStats = [...stats].map(difficulty => {
                    return heroes ?
                        {
                            ...difficulty,
                            heroAsArray: [...difficulty.heroAsArray].sort((a, b) => a.victories - b.victories)
                        } : {
                            ...difficulty,
                            shardWinrates: [...difficulty.shardWinrates].sort((a, b) => a.victories - b.victories)
                        }
                })
                setStats(sortedStats)
                heroes ? setHeroSorting(['VICS', 'ASC']) : setShardSorting(['VICS', 'ASC'])
            } else {
                const sortedStats = [...stats].map((difficulty, index) => {
                    return heroes ?
                        {
                            ...difficulty,
                            heroAsArray: results.data.allMatchData[index].heroAsArray
                        } : {
                            ...difficulty,
                            shardWinrates: results.data.allMatchData[index].shardWinrates
                        }
                })
                setStats(sortedStats)
                heroes ? setHeroSorting([null, null]) : setShardSorting([null, null])
            }
            break
        case 'WR':
            if (heroes && heroSorting[0] !== 'WR' || !heroes && shardSorting[0] !== 'WR') {
                const sortedStats = [...stats].map(difficulty => {
                    return heroes ?
                        {
                            ...difficulty,
                            heroAsArray: [...difficulty.heroAsArray].sort((a, b) => (b.victories / b.defeats) - (a.victories / a.defeats))
                        } : {
                            ...difficulty,
                            shardWinrates: [...difficulty.shardWinrates].sort((a, b) => (b.victories / b.defeats) - (a.victories / a.defeats))
                        }
                })
                setStats(sortedStats)
                heroes ? setHeroSorting(['WR', 'DESC']) : setShardSorting(['WR', 'DESC'])
            } else if (heroes && heroSorting[1] === 'DESC' || !heroes && shardSorting[1] === 'DESC') {
                const sortedStats = [...stats].map(difficulty => {
                    return heroes ?
                        {
                            ...difficulty,
                            heroAsArray: [...difficulty.heroAsArray].sort((a, b) => (a.victories / a.defeats) - (b.victories / b.defeats))
                        } : {
                            ...difficulty,
                            shardWinrates: [...difficulty.shardWinrates].sort((a, b) => (a.victories / a.defeats) - (b.victories / b.defeats))
                        }
                })
                setStats(sortedStats)
                heroes ? setHeroSorting(['WR', 'ASC']) : setShardSorting(['WR', 'ASC'])
            } else {
                const sortedStats = [...stats].map((difficulty, index) => {
                    return heroes ?
                        {
                            ...difficulty,
                            heroAsArray: results.data.allMatchData[index].heroAsArray
                        } : {
                            ...difficulty,
                            shardWinrates: results.data.allMatchData[index].shardWinrates
                        }
                })
                setStats(sortedStats)
                heroes ? setHeroSorting([null, null]) : setShardSorting([null, null])
            }
            break
        case 'DEATH':
            if (heroSorting[0] !== 'DEATH') {
                const sortedStats = [...stats].map(difficulty => {
                    return {
                        ...difficulty,
                        heroAsArray: [...difficulty.heroAsArray].sort((a, b) => (b.deaths / b.totalGames) - (a.deaths / a.totalGames))
                    }
                })
                setStats(sortedStats)
                setHeroSorting(['DEATH', 'DESC'])
            } else if (heroSorting[1] === 'DESC') {
                const sortedStats = [...stats].map(difficulty => {
                    return {
                        ...difficulty,
                        heroAsArray: [...difficulty.heroAsArray].sort((a, b) => (a.deaths / a.totalGames) - (b.deaths / b.totalGames))
                    }
                })
                setStats(sortedStats)
                setHeroSorting(['DEATH', 'ASC'])
            } else {
                const sortedStats = [...stats].map((difficulty, index) => {
                    return {
                        ...difficulty,
                        heroAsArray: results.data.allMatchData[index].heroAsArray
                    }
                })
                setStats(sortedStats)
                setHeroSorting([null, null])
            }
            break
        case 'GAMES':
            if (heroes && heroSorting[0] !== 'GAMES' || !heroes && shardSorting[0] !== 'GAMES') {
                const sortedStats = [...stats].map(difficulty => {
                    return heroes ?
                        {
                            ...difficulty,
                            heroAsArray: [...difficulty.heroAsArray].sort((a, b) => b.totalGames - a.totalGames)
                        } : {
                            ...difficulty,
                            shardWinrates: [...difficulty.shardWinrates].sort((a, b) => b.totalGames - a.totalGames)
                        }
                })
                setStats(sortedStats)
                heroes ? setHeroSorting(['GAMES', 'DESC']) : setShardSorting(['GAMES', 'DESC'])
            } else if (heroes && heroSorting[1] === 'DESC' || !heroes && shardSorting[1] === 'DESC') {
                const sortedStats = [...stats].map(difficulty => {
                    return heroes ?
                        {
                            ...difficulty,
                            heroAsArray: [...difficulty.heroAsArray].sort((a, b) => a.totalGames - b.totalGames)
                        } : {
                            ...difficulty,
                            shardWinrates: [...difficulty.shardWinrates].sort((a, b) => a.totalGames - b.totalGames)
                        }
                })
                setStats(sortedStats)
                heroes ? setHeroSorting(['GAMES', 'ASC']) : setShardSorting(['GAMES', 'ASC'])
            } else {
                const sortedStats = [...stats].map((difficulty, index) => {
                    return heroes ?
                        {
                            ...difficulty,
                            heroAsArray: results.data.allMatchData[index].heroAsArray
                        } : {
                            ...difficulty,
                            shardWinrates: results.data.allMatchData[index].shardWinrates
                        }
                })
                setStats(sortedStats)
                heroes ? setHeroSorting([null, null]) : setShardSorting([null, null])
            }
            break
        case 'PICKS':
            if (shardSorting[0] !== 'PICKS') {
                const sortedStats = [...stats].map((difficulty, index) => {
                    return {
                        ...difficulty,
                        shardWinrates: [...difficulty.shardWinrates].sort((a, b) => (b.totalGames / heroNames[b.hero].totalGames[index]) - (a.totalGames / heroNames[a.hero].totalGames[index]))
                    }
                })
                setStats(sortedStats)
                setShardSorting(['PICKS', 'DESC'])
            } else if (shardSorting[1] === 'DESC') {
                const sortedStats = [...stats].map((difficulty, index) => {
                    return {
                        ...difficulty,
                        shardWinrates: [...difficulty.shardWinrates].sort((a, b) => (a.totalGames / heroNames[a.hero].totalGames[index]) - (b.totalGames / heroNames[b.hero].totalGames[index]))
                    }
                })
                setStats(sortedStats)
                setShardSorting(['PICKS', 'ASC'])
            } else {
                const sortedStats = [...stats].map((difficulty, index) => {
                    return {
                        ...difficulty,
                        shardWinrates: results.data.allMatchData[index].shardWinrates
                    }
                })
                setStats(sortedStats)
                setShardSorting([null, null])
            }
            break
        case 'SHARDS':
            if (shardSorting[0] !== 'SHARDS') {
                const sortedStats = [...stats].map(difficulty => {
                    return {
                        ...difficulty,
                        shardWinrates: [...difficulty.shardWinrates].sort((a, b) => Shards[a.shard].name.localeCompare(Shards[b.shard].name))
                    }
                })
                setStats(sortedStats)
                setShardSorting(['SHARDS', 'DESC'])
            } else if (shardSorting[1] === 'DESC') {
                const sortedStats = [...stats].map(difficulty => {
                    return {
                        ...difficulty,
                        shardWinrates: [...difficulty.shardWinrates].sort((a, b) => Shards[b.shard].name.localeCompare(Shards[a.shard].name))
                    }
                })
                setStats(sortedStats)
                setShardSorting(['SHARDS', 'ASC'])
            } else {
                const sortedStats = [...stats].map((difficulty, index) => {
                    return {
                        ...difficulty,
                        shardWinrates: results.data.allMatchData[index].shardWinrates
                    }
                })
                setStats(sortedStats)
                setShardSorting([null, null])
            }
            break
        }
    }

    useEffect(() => {
        if (results.data) {
            // .sort((a, b) => a.hero.localeCompare(b.hero))
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
                Loading...
            </div>
        )
    } else {
        for (let key in heroNames) {
            heroNames[key].totalGames = [
                results.data.allMatchData[0].heroAsArray.filter(hero => hero.hero === heroNames[key].name)[0].totalGames,
                results.data.allMatchData[1].heroAsArray.filter(hero => hero.hero === heroNames[key].name)[0].totalGames,
                results.data.allMatchData[2].heroAsArray.filter(hero => hero.hero === heroNames[key].name)[0].totalGames,
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
                {stats.map((difficulty, key) => {
                    return (
                        <div key={key} className={Number(visibleDifficulty) === key ? '' : 'hidden'}>
                            <table className='statTable shardStatsEl' >
                                <tbody>
                                    <tr>
                                        <th className='leftAlignText leftSpacing'>Hero</th>
                                        <th className='shardStatsEl'
                                            onClick={() => sortStats('VICS', 'heroes')}
                                        >
                                            Victories
                                            <Icon name={heroSorting[0] !== 'VICS' ? 'sort' : heroSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
                                        </th>
                                        <th className='shardStatsEl'
                                            onClick={() => sortStats('WR', 'heroes')}
                                        >
                                            Win rate
                                            <Icon name={heroSorting[0] !== 'WR' ? 'sort' : heroSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
                                        </th>
                                        <th className='shardStatsEl'
                                            onClick={() => sortStats('DEATH', 'heroes')}
                                        >
                                            Average deaths
                                            <Icon name={heroSorting[0] !== 'DEATH' ? 'sort' : heroSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
                                        </th>
                                        <th className='shardStatsEl'
                                            onClick={() => sortStats('GAMES', 'heroes')}
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
                {stats.map((difficulty, key) => {
                    return (
                        <div className={Number(visibleDifficulty) === key ? '' : 'hidden'} key={key}>
                            <table className='statTable shardStatsEl' onMouseLeave={() => setHoveredElement(null)}>
                                <tbody>
                                    <tr>
                                        <th className='leftAlignText leftSpacing' onClick={() => sortStats('SHARDS', 'heroes')} >
                                            Shard
                                            <Icon name={shardSorting[0] !== 'SHARDS' ? 'sort' : shardSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
                                        </th>
                                        <th className='shardStatsEl' onClick={() => sortStats('PICKS')}>
                                            Pick rate
                                            <Icon name={shardSorting[0] !== 'PICKS' ? 'sort' : shardSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
                                        </th>
                                        <th className='shardStatsEl' onClick={() => sortStats('WR')}>
                                            Win rate
                                            <Icon name={shardSorting[0] !== 'WR' ? 'sort' : shardSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
                                        </th>
                                        <th className='shardStatsEl' onClick={() => sortStats('VICS')}>
                                            Victories
                                            <Icon name={shardSorting[0] !== 'VICS' ? 'sort' : shardSorting[1] === 'DESC' ? 'sort down' : 'sort up'} />
                                        </th>
                                        <th className='shardStatsEl' onClick={() => sortStats('GAMES')}>
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
                                                            <div>
                                                                <div className='shardTitle leftAlignText'>{Shards[shard.shard].name}</div>
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
    )
}

export default AllStats