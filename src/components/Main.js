import React from 'react'

import HeroList from './HeroList'
import Heroes from '../Heroes'

const Main = () => {
    return (
        <div>
            <HeroList heroes={Heroes} />
        </div>
    )
}

export default Main