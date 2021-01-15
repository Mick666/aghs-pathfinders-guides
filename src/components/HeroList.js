import React from 'react'
import { Link } from 'react-router-dom'

const HeroList = ({ heroes }) => {
    return (
        <div>
            {heroes.map((hero, key) => {
                return (
                    <Link key={key} to={`/heroes/${hero.id}`}>
                        <img className='heroImage' src={hero.image} />
                    </Link>
                )
            })}
        </div>
    )
}

export default HeroList