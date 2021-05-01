import React from 'react'

export const EmptyHeroStatsHeader = () => {
    return (
        <div className='hero-stats-overall flexRow'>
            <div className='flexColumn'>
                <span>0</span>
                <span className='heroStatTitle'>Victories</span>
            </div>
            <div className='flexColumn'>
                <span>0%</span>
                <span className='heroStatTitle'>Win Rate</span>
            </div>
            <div className='flexColumn'>
                <span>0</span>
                <span className='heroStatTitle'>Average Deaths</span>
            </div>
            <div className='flexColumn'>
                <span>0</span>
                <span className='heroStatTitle'>Total Games</span>
            </div>
        </div>
    )
}

const HeroStatsHeader = ({ stats }) => {
    return (
        <div className='hero-stats-overall flexRow'>
            <div className='flexColumn'>
                <span>{stats.singleHeroStats.victories}</span>
                <span className='heroStatTitle'>Victories</span>
            </div>
            <div className='flexColumn'>
                <span>
                    {stats.singleHeroStats.victories > 0 && stats.singleHeroStats.defeats > 0 ?
                        (stats.singleHeroStats.victories / stats.singleHeroStats.defeats * 100).toString().slice(0, 4) + '%' : '0%'}
                </span>
                <span className='heroStatTitle'>Win Rate</span>
            </div>
            <div className=' flexColumn'>
                <span>
                    {stats.singleHeroStats.deaths > 0 && stats.singleHeroStats.totalGames > 0 ? (stats.singleHeroStats.deaths / stats.singleHeroStats.totalGames).toString().slice(0, 4) : 0}
                </span>
                <span className='heroStatTitle'>Average Deaths</span>
            </div>
            <div className='flexColumn'>
                <span>{stats.singleHeroStats.totalGames}</span>
                <span className='heroStatTitle'>Total Games</span>
            </div>
        </div>
    )
}

export default HeroStatsHeader