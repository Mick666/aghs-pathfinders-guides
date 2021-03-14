import React from 'react'


const HeroStatsTable = ({ heroIDs, hero }) => {
    return (
        <tr>
            <td className='shardStatsEl'>
                <div className='shardStatsShard'>
                    <img className='heroStatsImage' src={heroIDs[hero.hero].image} />
                    <b className='shardStatsTitle leftAlignText'>{hero.hero}</b>
                </div>
            </td>
            <td className='shardStatsEl'>{hero.victories}</td>
            <td className='shardStatsEl'>{(hero.victories / hero.defeats * 100).toString().slice(0, 4) + '%'}</td>
            <td className='shardStatsEl'>{(hero.deaths / hero.totalGames).toString().slice(0, 4)}</td>
            <td className='shardStatsEl'>{hero.totalGames}</td>
        </tr>
    )
}

export default HeroStatsTable