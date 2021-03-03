import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useHistory } from 'react-router-dom'

import Heroes from '../../Heroes'
import CreateItemGroups from './CreateItemGroups'
import CreateGuideLevels from './CreateGuideLevels'
import CreateGuideShardRankings from './CreateGuideShardRanking'
import CreateGuideShardCombos from './CreateGuideShardCombos'
import { ADD_GUIDE } from '../../graphql/mutations'

const CreateGuide = () => {
    const [guideName, setGuideName] = useState('')
    const [heroSelection, setHeroSelection] = useState('Axe')
    const hero = Heroes.filter(hero => hero.id === heroSelection)[0]
    const [items, setItems] = useState([])
    const [levels, setLevels] = useState([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5])
    const [selectedTalents, setTalents] = useState([1, 1, 1, 1])
    const [shardRanking, setShardRanking] = useState(hero.shards)
    const [shardCombinations, setShardCombos] = useState([{ groupName: 1, shards: [], description: '', deleted: false }])
    const [errorMessages, setErrorMessages] = useState([])
    const history = useHistory()
    const [addGuide] = useMutation(ADD_GUIDE)

    const guideSubmission = () => {
        let errors = []
        if (items.some(item => item.items.length === 0)) errors.push('One or more item groups have no items in them')
        if (levels.filter(level => level === 5).length > 1) errors.push('One or more ability points have not been assigned')
        if (selectedTalents.filter(talent => talent === 1).length > 0) errors.push('One or more talents have not been selected')
        const shardComboDescriptions = [...document.getElementsByClassName('formikTextField')].map(desc => desc.value)
        const completedShardCombos = shardCombinations
            .map((combo, index) => { return { combination: combo.shards, description: shardComboDescriptions[index] } })
            .filter(combo => combo.combination.length > 0 && combo.description.length > 0)
        if (completedShardCombos.filter(combo => combo.description.length === 0).length > 0) errors.push('One or more shard combos are missing a description')
        if (completedShardCombos.filter(combo => combo.combination.length === 0).length > 0) errors.push('One or more shard combos are missing shards')
        if (errors.length > 0) {
            setErrorMessages(errors)
            return
        }
        try {
            addGuide({
                variables: {
                    title: guideName,
                    createdAt: new Intl.DateTimeFormat('en-GB').format(new Date()).toString().replace(/\/20([0-9]{2})/, '/$1'),
                    rating: [0, 1],
                    hero: heroSelection,
                    itemGroups: items,
                    selectedTalents: selectedTalents,
                    levels: levels,
                    shards: shardRanking,
                    shardCombinations: completedShardCombos
                }
            })
        } catch (error) {
            console.log(error)
        }

        setGuideName('')

        setItems([])
        setLevels([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5])
        setTalents([1, 1, 1, 1])
        setShardRanking(hero.shards)
        setShardCombos([{ groupName: 1, shards: [], description: '', deleted: false }])
        setErrorMessages([])
        history.push(`/heroes/${heroSelection}`)
        setHeroSelection('Axe')

    }

    useEffect(() => {
        setShardRanking(hero.shards)
    }, [heroSelection])

    return (
        <DndProvider backend={HTML5Backend}>
            <div className='createGuidePage'>
                <div className='newGuideParent'>
                    <div className='newGuideHeaders'>
                        <div className='guideName'>
                            <div className='guideHeaderText'>Guide name: </div>
                            <div>
                                <input
                                    onChange={(e) => setGuideName(e.target.value)}
                                    value={guideName}
                                />
                            </div>
                        </div>
                        <div className='guideHero'>
                            <div className='guideHeaderText'>Select hero:</div>
                            <div>
                                <select
                                    onChange={(e) => setHeroSelection(e.target.value)}
                                    value={heroSelection}
                                >
                                    {Heroes.map((hero, key) => {
                                        return (
                                            <option key={key} value={hero.id}>{hero.id}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div>
                            <button onClick={guideSubmission}>Create guide</button>
                        </div>
                    </div>
                    <div className='errorMessage centerText'>
                        {errorMessages.length > 0 ?
                            <ul>
                                {errorMessages.map((error, key) => <li key={key} >{error}</li>)}
                            </ul>
                            : null
                        }
                    </div>
                </div>
                <div className='createGuideSection'>
                    <CreateItemGroups items={items} setItems={setItems} />
                </div>
                <div className='createGuideSection'>
                    <CreateGuideLevels
                        hero={hero}
                        selectedTalents={selectedTalents}
                        levels={levels}
                        setLevels={setLevels}
                        setTalents={setTalents}
                    />
                </div>
                <div className='createGuideSection'>
                    <CreateGuideShardRankings
                        shardRanking={shardRanking}
                        setShardRanking={setShardRanking}
                    />
                </div>
                <div className='createGuideSection'>
                    <CreateGuideShardCombos shardCombinations={shardCombinations} setShardCombinations={setShardCombos} />
                </div>
            </div>
        </DndProvider>
    )
}

export default CreateGuide