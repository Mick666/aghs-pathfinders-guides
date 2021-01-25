/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import Heroes from '../Heroes'
import CreateItemGroups from './CreateItemGroups'
import CreateGuideLevels from './CreateGuideLevels'
import CreateGuideShardRankings from './CreateGuideShardRanking'
import CreateGuideShardCombos from './CreateGuideShardCombos'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const CreateGuide = () => {
    const [guideName, setGuideName] = useState('')
    const [heroSelection, setHeroSelection] = useState('Axe')
    const hero = Heroes.filter(hero => hero.id === heroSelection)[0]
    console.log(hero)

    const [items, setItems] = useState([])
    const [levels, setLevels] = useState([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5])
    const [selectedTalents, setTalents] = useState([1, 1, 1, 1])
    const [shardRanking, setShardRanking] = useState(hero.shards)
    console.log(shardRanking)
    const [shardCombinations, setShardCombos] = useState([{ groupName: 1, shards: [], description: '' }])
    const [errorMessages, setErrorMessages] = useState({ guideName: null })

    const guideSubmission = () => {
        console.log()
    }

    useEffect(() => {
        console.log(hero)
        setShardRanking(hero.shards)
    }, [heroSelection])

    return (
        <DndProvider backend={HTML5Backend}>
            <div className='createGuidePage'>
                <h2 className='createGuideHeader'>Create A Guide</h2>
                <div className='newGuideParent'>
                    <div className='newGuideHeaders'>
                        <div className='guideName'>
                            <div className='guideHeaderText'>Guide name: </div>
                            <div>
                                <input
                                    onChange={(e) => setGuideName(e.target.value)}
                                    value={guideName}
                                />
                                <div className='errorMessage'>{errorMessages.guideName}</div>
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
            </div>
        </DndProvider>
    )
}

export default CreateGuide