import React from 'react'

import { Rooms } from '../../data/Rooms'

const getRoomImage = (room, elite) => {
    if (room === 'nil') return ''
    else if (!Rooms[room]) return ''
    else if (Rooms[room].rest) return 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7c/Aghanim%27s_Labyrinth_Room_Rest.png'
    else if (Rooms[room].traps) return 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/10/Aghanim%27s_Labyrinth_Room_Trap.png'
    else if (Rooms[room].boss) return 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9c/Aghanim%27s_Labyrinth_Room_Boss.png'
    else if (Rooms[room].bonus) return 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/0b/Aghanim%27s_Labyrinth_Room_Bonus.png'
    else if (elite) return 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/de/Aghanim%27s_Labyrinth_Room_Elite.png'
    return 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a5/Aghanim%27s_Labyrinth_Room_Combat.png'
}

const RoomsTable = ({ expanded, rooms, individualGame }) => {
    return (
        <div className={`flexColumn game-rooms-root ${expanded || individualGame ? 'active' : ''}`}>
            <span className='game-room-table-title centerText'>Rooms</span>
            <table className='flexColumn game-rooms-parent'>
                <tbody>
                    <tr className='game-room-table-row'>
                        <th className='game-room-table'>Depth</th>
                        <th className='game-room-table'>Picked Room</th>
                        <th className='game-room-table' />
                        <th className='game-room-table'>Unpicked Room</th>
                        <th className='game-room-table' />
                    </tr>
                    {rooms.map((room, key) => {
                        return (
                            <tr key={key} className='game-room-table-row'>
                                <td className='game-room-table'>{key + 1}</td>
                                <td className='game-room-table'>{Rooms[room.picked_name] ? Rooms[room.picked_name].name : room.picked_name}</td>
                                <td className='game-room-table'><img className='game-room-image' src={getRoomImage(room.picked_name, room.picked_elite)} /></td>
                                <td className='game-room-table'>{Rooms[room.unpicked_name] ? Rooms[room.unpicked_name].name : room.unpicked_name === 'nil' ? '' : room.unpicked_name}</td>
                                <td className='game-room-table'>{room.unpicked_name === 'nil' ? '' : <img className='game-room-image' src={getRoomImage(room.unpicked_name, room.unpicked_elite)} />}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default RoomsTable