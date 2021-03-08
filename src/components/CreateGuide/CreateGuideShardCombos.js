import React, { useState } from 'react'
import { FormikTextField } from '../FormikPremades'
import SelectSearch from 'react-select-search'

import Shards from '../../data/Shards'
import Abilities from '../../data/Abilities'

const AddShardsSearch = ({ setShardCombinations, shardCombinations, groupName, setLevelError }) => {
    const itemValues = Object.entries(Shards).map(item => {
        return { name: item[1].name, value: item[0], link: Abilities[item[1].skill].link }
    })

    function renderShardSearch(props, option, snapshot, className) {
        const imgStyle = {
            borderRadius: '50%',
            verticalAlign: 'middle',
            marginRight: 10,
        }

        return (
            <button {...props} className={className} type="button" value={option.value}>
                <span><img alt="" style={imgStyle} width="32" height="32" src={option.link} /><span>{option.name}</span></span>
            </button>
        )
    }


    function addShard(value) {
        const updatedSection = shardCombinations.filter(section => section.groupName === groupName.groupName)[0]
        if (updatedSection.shards.some(shard => shard === value)) {
            setLevelError('Can\'t add the same shard twice')
            return
        }
        updatedSection.shards = updatedSection.shards.concat(value)
        setShardCombinations(shardCombinations.map(shard => shard.groupName === groupName ? updatedSection : shard))
    }

    return (
        <SelectSearch
            className="select-search select-search--multiple select-parent"
            options={itemValues}
            renderOption={renderShardSearch}
            search
            placeholder="Add shards"
            onChange={addShard}
        />
    )

}

const ShardComboInput = ({ shardCombinations, setShardCombinations, combo, setLevelError }) => {

    function removeCombo(combo) {
        console.log(combo, shardCombinations)
        const comboForDeletion = shardCombinations[combo.groupName-1]
        comboForDeletion.shards = []
        comboForDeletion.deleted = true
        console.log(comboForDeletion)
        setShardCombinations(shardCombinations.map(x => x.groupName === combo.groupName ? comboForDeletion : x))
    }
    return (
        <div
            className='createGuideShardComboInput'
            style={{ display: `${combo.deleted ? 'none' : 'grid'}` }}
        >
            <div>
                <div>Explanation:</div>
                <FormikTextField className='rightSpacing' />
            </div>
            <div className='createGuideShardCombos rightSpacing'>
                <div>Shards:</div>
                <div>
                    {combo.shards.map((x, key) => {
                        return (
                            <div key={key} className='itemCell'>
                                <img
                                    src={Abilities[Shards[x].skill].link}
                                    className='itemIcon'
                                />
                                <div className='itemText'>{Shards[x].name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <AddShardsSearch
                groupName={combo}
                shardCombinations={shardCombinations}
                setShardCombinations={setShardCombinations}
                setLevelError={setLevelError}
            />
            <button className='shardComboRemoveButton' onClick={() => removeCombo(combo)} >Remove</button>
        </div>
    )
}

const CreateGuideShardCombos = ({ shardCombinations, setShardCombinations }) => {
    const [error, setError] = useState('')
    const setLevelError = (message) => {
        setError(message)
        setTimeout(() => setError(''), 2000)
    }

    function addComboInput() {
        const latestNumber = shardCombinations[shardCombinations.length - 1].groupName + 1
        setShardCombinations(shardCombinations.concat({ groupName: latestNumber, shards: [], description: '', deleted: false }))
    }
    return (
        <div>
            <div className='centerText shardRankingHeader'>
                <h2 className='centerText bottomSpacing'>Legendary Shard Combos</h2>
                <div className='bottomSpacing'>If you know any powerful interactions between legendary shards, add an explanation and select the shards from the dropdown</div>
                <button onClick={addComboInput}>Add another combo</button>
                <div className='errorMessage'>{error}</div>
            </div>
            {shardCombinations.map((combo, ind) =>
                <ShardComboInput
                    combo={combo}
                    shardCombinations={shardCombinations}
                    setShardCombinations={setShardCombinations}
                    setLevelError={setLevelError}
                    key={ind}
                />)}
        </div>
    )
}

export default CreateGuideShardCombos