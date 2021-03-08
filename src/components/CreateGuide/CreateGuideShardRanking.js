import React, { useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import Shards from '../../data/Shards'
import Abilities from '../../data/Abilities'

const IndividualShard = ({ shard, handleDrop, indx, shardDetails }) => {

    //eslint-disable-next-line
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
    return (
        <div ref={drop} className='dropDiv'>
            <div className='createShardRankingParent' ref={drag}>
                <img src={Abilities[Shards[shard].skill].link} className='createGuideShardImage' />
                <div className='shardRankingDetailsParent'>
                    <h3 className='shardTitle' >{Shards[shard].name}</h3>
                    <div className={`shardDescription ${shardDetails ? '' : 'hidden'}`} >{Shards[shard].description}</div>
                </div>
            </div>
        </div>
    )
}

const CreateGuideShardRankings = ({ shardRanking, setShardRanking }) => {
    const [shardDetails, setShardDetails] = useState(false)
    const handleDrop = (shard, position) => {
        const heroShardsCopy = [...shardRanking]
        reorderArray(heroShardsCopy, shard.ind, position)
        setShardRanking(heroShardsCopy)
    }

    function reorderArray(array, from, to) {
        return array.splice(to, 0, array.splice(from, 1)[0])
    }
    return (
        <div className='createGuideShardRankings'>
            <div className='centerText shardRankingHeader'>
                <h2 className='centerText bottomSpacing'>Shard Rankings</h2>
                <div className='bottomSpacing'>Drop and drag the hero&apos;s Legendary Shards, sorted from best to worst</div>
                <button onClick={() => setShardDetails(!shardDetails)}>{shardDetails ? 'Collapse Shards' : 'Expand Shards'}</button>
            </div>
            <div>
                {shardRanking.map((shard, key) =>
                    <IndividualShard
                        key={key} shard={shard}
                        handleDrop={handleDrop}
                        indx={key}
                        shardDetails={shardDetails}
                    />)}
            </div>
        </div>
    )
}

export default CreateGuideShardRankings