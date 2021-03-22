import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import { useQuery } from '@apollo/client'

import Game from './VictoriousGames/Game'
import { INDIVIDUAL_GAME } from '../graphql/queries'
import { HoverShard } from './HoverElement'

const IndividualGame = () => {
    const difficulty = useParams().difficulty
    const matchId = useParams().matchId
    const matchData = useQuery(INDIVIDUAL_GAME, { variables: { difficulty: difficulty, matchId: matchId } })
    const [shard, setShard] = useState(null)
    const [position, setPosition] = useState({ top: 0, left: 0 })
    if (matchData.loading) {
        return (
            <div>
                <Loader active inverted >Loading</Loader>
            </div>
        )
    } else if (!matchData.data) {
        return (
            <div>
                <span>Invalid Match ID, no game found</span>
            </div>
        )
    }

    return (
        <div className='games-root' onMouseMove={(e) => setPosition({ top: e.pageY, left: e.pageX })} >
            <HoverShard position={position} shard={shard}/>
            <Game match={matchData.data.individualGame} setShard={setShard} individualGame/>
        </div>
    )
}

export default IndividualGame