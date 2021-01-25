/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import Heroes from '../Heroes'
import CreateItemGroups from './CreateItemGroups'
import CreateGuideLevels from './CreateGuideLevels'
import CreateGuideShardRankings from './CreateGuideShardRanking'
import CreateGuideShardCombos from './CreateGuideShardCombos'

const CreateGuide = () => {
    const [guideName, setGuideName] = useState('New Guide')
    const [heroSelection, setHeroSelection] = useState('Axe')
    const hero = Heroes.filter(hero => hero.id === heroSelection)[0]
    console.log(hero)

    const [items, setItems] = useState([])
    const [levels, setLevels] = useState([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5])
    const [selectedTalents, setTalents] = useState([])
    const [shardRanking, setShardRanking] = useState(hero.shards)
    console.log(shardRanking)
    const [shardCombinations, setShardCombos] = useState([{groupName: 1, shards: [], description: ''}])
    const [errorMessages, setErrorMessages] = useState({ guideName: null })

    const guideSubmission = () => {
        console.log()
    }

    useEffect(() => {
        console.log(hero)
        setShardRanking(hero.shards)
    }, [heroSelection])

    return (
        <div className='heroPage'>
            <div>
                <h2 className='allGuides'>Add a new guide</h2>
            </div>
            <div className='newGuideParent'>
                <div>
                    <div>
                        <input
                            onChange={(e) => setGuideName(e.target.value)}
                            value={guideName}
                        />
                        <div className='errorMessage'>{errorMessages.guideName}</div>
                    </div>
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
                    <CreateItemGroups items={items} setItems={setItems} />
                </div>
                <div>
                    <CreateGuideLevels
                        hero={hero}
                        selectedTalents={selectedTalents}
                        levels={levels}
                        setLevels={setLevels}
                        setTalents={setTalents}
                    />
                </div>
                <div>
                    <CreateGuideShardRankings 
                        shardRanking={shardRanking}
                        setShardRanking={setShardRanking}
                    />
                </div>
                <div>
                    <CreateGuideShardCombos shardCombinations={shardCombinations} setShardCombinations={setShardCombos} />
                </div>
            </div>
        </div>
    )
}

export default CreateGuide