import React from 'react'
import { Link } from 'react-router-dom'

const HeroList = ({ heroes }) => {
    return (
        <div>
            <div className='heroListParent'>
                <div className='heroListDiv'>
                    {heroes.map((hero, key) => {
                        return (
                            <Link key={key} to={`/heroes/${hero.id}`} className='heroImages cleanLink'>
                                <img className='heroImage' src={hero.image} />
                                <div className='heroText'>{hero.name}</div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HeroList