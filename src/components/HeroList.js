import React from 'react'
import { Link } from 'react-router-dom'

const HeroList = ({ heroes }) => {
    return (
        <div>
            <h2 className='shardTitle heroListTitle'>Hero Roster</h2>
            <div className='heroListParent'>

                <div className='heroListDiv'>
                    {heroes.map((hero, key) => {
                        return (
                            <Link key={key} to={`/heroes/${hero.id}`} className='headerLinks cleanLink'>
                                <img className='heroImage' src={hero.image} />
                                <div className='heroText'>{hero.id}</div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HeroList