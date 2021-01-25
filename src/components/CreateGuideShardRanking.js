import React, { useState } from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Shards from '../Shards'
import Abilities from '../Abilities'

const IndividualShard = ({ shard, handleDrop, indx }) => {
    const [_, drag] = useDrag({
        item: { id: shard, type: 'shard', ind: indx }
    })
    const [{ shardSource }, drop] = useDrop({
        accept: 'shard',
        drop: () => handleDrop(shardSource, indx),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            shardSource: monitor.getItem(),
        }),
    })
    console.log(Shards[shard])
    console.log(Abilities[Shards[shard].skill])
    return (
        <div ref={drop} className='dropDiv'>
            <div className='createShardRankingParent' ref={drag}>
                <img src={Abilities[Shards[shard].skill].link} className='shardImage' />
                <div>
                    <h3 className='shardTitle' >{Shards[shard].name}</h3>
                    <div className='shardDescription' >{Shards[shard].description}</div>
                </div>
            </div>
        </div>
    )
}

const CreateGuideShardRankings = ({ shardRanking, setShardRanking }) => {

    const handleDrop = (shard, position) => {
        const heroShardsCopy = [...shardRanking]
        reorderArray(heroShardsCopy, shard.ind, position)
        setShardRanking(heroShardsCopy)
    }

    function reorderArray(array, from, to) {
        return array.splice(to, 0, array.splice(from, 1)[0])
    }
    return (
        <div className='shardRankings'>
            <h2 className='levelGridTitle'>Shard Rankings</h2>
            <DndProvider backend={HTML5Backend}>
                <div>
                    {shardRanking.map((shard, key) => <IndividualShard key={key} shard={shard} handleDrop={handleDrop} indx={key} />)}
                </div>
            </DndProvider>
        </div>
    )
}

export default CreateGuideShardRankings