import Shards from '../data/Shards'

function sortStats({ stats, rawData, setStats, setSorting, heroSorting, shardSorting, category, heroes, filterSort, heroTotalGames }) {
    console.log(arguments)
    if (!stats || !rawData) return
    switch (category) {
    case 'VICS':
        if (heroes && heroSorting[0] !== 'VICS' || filterSort && shardSorting[1] === 'DESC' || !heroes && shardSorting[0] !== 'VICS') {
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
            setSorting(['VICS', 'DESC'])
        } else if (heroes && heroSorting[1] === 'DESC' || filterSort && shardSorting[1] === 'ASC' || !heroes && shardSorting[1] === 'DESC') {
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
            setSorting(['VICS', 'ASC'])
        } else {
            const sortedStats = [...stats].map((difficulty, index) => {
                return heroes ?
                    {
                        ...difficulty,
                        heroAsArray: rawData[index].heroAsArray
                    } : {
                        ...difficulty,
                        shardWinrates: rawData[index].shardWinrates
                    }
            })
            setStats(sortedStats)
            setSorting([null, null])
        }
        break
    case 'WR':
        if (heroes && heroSorting[0] !== 'WR' || filterSort && shardSorting[1] === 'DESC' || !heroes && shardSorting[0] !== 'WR') {
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
            setSorting(['WR', 'DESC'])
        } else if (heroes && heroSorting[1] === 'DESC' || filterSort && shardSorting[1] === 'ASC' || !heroes && shardSorting[1] === 'DESC') {
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
            setSorting(['WR', 'ASC'])
        } else {
            const sortedStats = [...stats].map((difficulty, index) => {
                return heroes ?
                    {
                        ...difficulty,
                        heroAsArray: rawData[index].heroAsArray
                    } : {
                        ...difficulty,
                        shardWinrates: rawData[index].shardWinrates
                    }
            })
            setStats(sortedStats)
            setSorting([null, null])
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
            setSorting(['DEATH', 'DESC'])
        } else if (heroSorting[1] === 'DESC') {
            const sortedStats = [...stats].map(difficulty => {
                return {
                    ...difficulty,
                    heroAsArray: [...difficulty.heroAsArray].sort((a, b) => (a.deaths / a.totalGames) - (b.deaths / b.totalGames))
                }
            })
            setStats(sortedStats)
            setSorting(['DEATH', 'ASC'])
        } else {
            const sortedStats = [...stats].map((difficulty, index) => {
                return {
                    ...difficulty,
                    heroAsArray: rawData[index].heroAsArray
                }
            })
            setStats(sortedStats)
            setSorting([null, null])
        }
        break
    case 'GAMES':
        if (heroes && heroSorting[0] !== 'GAMES' || filterSort && shardSorting[1] === 'DESC' || !heroes && shardSorting[0] !== 'GAMES') {
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
            setSorting(['GAMES', 'DESC'])
        } else if (heroes && heroSorting[1] === 'DESC' || filterSort && shardSorting[1] === 'ASC' || !heroes && shardSorting[1] === 'DESC') {
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
            setSorting(['GAMES', 'ASC'])
        } else {
            const sortedStats = [...stats].map((difficulty, index) => {
                return heroes ?
                    {
                        ...difficulty,
                        heroAsArray: rawData[index].heroAsArray
                    } : {
                        ...difficulty,
                        shardWinrates: rawData[index].shardWinrates
                    }
            })
            setStats(sortedStats)
            setSorting([null, null])
        }
        break
    case 'PICKS':
        if (filterSort && shardSorting[1] === 'DESC' || shardSorting[0] !== 'PICKS') {
            console.log(stats)
            const sortedStats = [...stats].map((difficulty, index) => {
                return {
                    ...difficulty,
                    shardWinrates: [...difficulty.shardWinrates].sort((a, b) => (b.totalGames / heroTotalGames[b.hero][index]) - (a.totalGames / heroTotalGames[a.hero][index]))
                }
            })
            console.log(sortedStats[0].shardWinrates)
            setStats(sortedStats)
            setSorting(['PICKS', 'DESC'])
        } else if (filterSort && shardSorting[1] === 'ASC' || shardSorting[1] === 'DESC') {
            const sortedStats = [...stats].map((difficulty, index) => {
                return {
                    ...difficulty,
                    shardWinrates: [...difficulty.shardWinrates].sort((a, b) => (a.totalGames / heroTotalGames[a.hero][index]) - (b.totalGames / heroTotalGames[b.hero][index]))
                }
            })
            console.log(sortedStats[0].shardWinrates)
            setStats(sortedStats)
            setSorting(['PICKS', 'ASC'])
        } else {
            const sortedStats = [...stats].map((difficulty, index) => {
                return {
                    ...difficulty,
                    shardWinrates: rawData[index].shardWinrates
                }
            })
            console.log(sortedStats[0].shardWinrates)
            setStats(sortedStats)
            setSorting([null, null])
        }
        break
    case 'SHARDS':
        if (filterSort && shardSorting[1] === 'DESC' || shardSorting[0] !== 'SHARDS') {
            const sortedStats = [...stats].map(difficulty => {
                return {
                    ...difficulty,
                    shardWinrates: [...difficulty.shardWinrates].sort((a, b) => Shards[a.shard].name.localeCompare(Shards[b.shard].name))
                }
            })
            setStats(sortedStats)
            setSorting(['SHARDS', 'DESC'])
        } else if (filterSort && shardSorting[1] === 'ASC' || shardSorting[1] === 'DESC') {
            const sortedStats = [...stats].map(difficulty => {
                return {
                    ...difficulty,
                    shardWinrates: [...difficulty.shardWinrates].sort((a, b) => Shards[b.shard].name.localeCompare(Shards[a.shard].name))
                }
            })
            setStats(sortedStats)
            setSorting(['SHARDS', 'ASC'])
        } else {
            const sortedStats = [...stats].map((difficulty, index) => {
                return {
                    ...difficulty,
                    shardWinrates: rawData[index].shardWinrates
                }
            })
            setStats(sortedStats)
            setSorting([null, null])
        }
        break
    }
}

export default sortStats