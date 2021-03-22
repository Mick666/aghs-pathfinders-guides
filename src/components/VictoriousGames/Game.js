import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'

import Player from './Player'
import RoomsTable from './Rooms'

const Game = ({ match, setShard, shard, individualGame }) => {
    // console.log(match)
    const [expanded, setExpanded] = useState(false)
    return (
        <div className='flexRow game-parent'>
            <div className='game-players flexRow'>
                {match.players.map((player, key) => <Player key={key} player={player} expanded={expanded} setShard={setShard} shard={shard} individualGame={individualGame} />)}
            </div>
            { !individualGame ?
                <div className={`flexRow game-player-expand-parent ${expanded ? 'active' : ''}`} onClick={() => setExpanded(!expanded)}>
                    <Icon name={`caret square ${expanded ? 'up' : 'down'} outline`} className='game-expansion-icon' />
                    <span>{expanded ? 'Hide' : 'Expand'}</span>
                </div>
                : null
            }

            <RoomsTable expanded={expanded} rooms={match.levelData.rooms} individualGame={individualGame}/>
        </div>
    )
}

export default Game