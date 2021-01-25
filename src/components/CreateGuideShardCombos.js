import React, { useState } from 'react'
import { FormikTextField } from './FormikPremades'
import SelectSearch from 'react-select-search'
import '../../node_modules/react-select-search/style.css'

import Shards from '../Shards'
import Abilities from '../Abilities'

const AddShardsSearch = ({ setShardCombinations, shardCombinations, groupName }) => {
    const itemValues = Object.entries(Shards).map(item => {
        console.log(item[1])
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
        updatedSection.shards = updatedSection.shards.concat(value)
        setShardCombinations(shardCombinations.map(item => item.groupName === groupName ? updatedSection : item))
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

const ShardComboInput = ({ shardCombinations, addCombo, setShardCombinations, groupInd }) => {
    return (
        <div className='guideSection'>
            <FormikTextField onSubmit={addCombo} />
            <div className='guideItems'>
                {groupInd.shards.map((x, key) => {
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
            <AddShardsSearch groupName={groupInd} shardCombinations={shardCombinations} setShardCombinations={setShardCombinations} />
        </div>
    )
}

const CreateGuideShardCombos = ({ shardCombinations, setShardCombinations }) => {
    function addCombo() {
        // setShardCombinations(shardCombinations.concat({ description: event.inputValue, combination: [] }))
        console.log(document.getElementsByClassName('formikTextField'))
    }

    function addComboInput() {
        console.log([...document.getElementsByClassName('formikTextField')].map(x => x.value))
    }
    return (
        <div>
            {shardCombinations.map((combo, ind) => <ShardComboInput groupInd={combo} shardCombinations={shardCombinations}  setShardCombinations={setShardCombinations} addCombo={addCombo} key={ind} />)}
            <button onClick={addComboInput}>Add another combo</button>
        </div>
    )
}

export default CreateGuideShardCombos