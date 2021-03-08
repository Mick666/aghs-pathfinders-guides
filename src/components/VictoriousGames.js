import React from 'react'
import { useQuery } from '@apollo/client'
import { Loader } from 'semantic-ui-react'

import { VIC_GAMES } from '../graphql/queries'
import Game from './Game'

const VictoriousGames = () => {
    const games = useQuery(VIC_GAMES)

    if (!games || games.loading || !games.data) return (
        <div>
            <Loader active inverted>Loading</Loader>
        </div>
    )
    return (
        <div className='games-root'>
            <div className='games-difficulty-header flexRow'>
                <span className='guideTabLink active'>Grand Magus</span>
                <span className='guideTabLink'>Apex Mage</span>
                <span className='guideTabLink'>Sorcerer</span>
            </div>
            {games.data.allMatchData[0].victoriousGames.map((match, key) => <Game key={key} match={match} />)}
        </div>
    )
}

export default VictoriousGames