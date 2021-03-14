import React from 'react'
import Heroes from '../../data/Heroes'
import Select from 'react-select'

const StatsHeader = ({ visibleStats, setVisibleDifficulty, filterShards }) => {
    return (
        <div className='statsHeader'>
            <div className='statsSelectors'>
                <div className={`statsDifficultyFilterParent ${visibleStats === 'shards' ? '' : 'headerMargin'}`}>
                    <h4>Difficulty</h4>
                    <Select
                        name='heroFilter'
                        options={[{ value: 0, label: 'Grand Magus' }, { value: 1, label: 'Apex Mage' }, { value: 2, label: 'Sorcerer' }]}
                        defaultValue={{ value: 0, label: 'Grand Magus' }}
                        onChange={(e) => setVisibleDifficulty(e.value)}
                        classNamePrefix='statsDifficultyFilter'
                        className='statsDifficultyFilter'
                    />
                </div>
                <div className={`statsHeroFilterParent ${visibleStats === 'shards' ? '' : 'hidden'}`}>
                    <h4>Heroes</h4>
                    <Select
                        isMulti
                        name='heroFilter'
                        options={Heroes.map(hero => { return { value: hero.id, label: hero.name } })}
                        onChange={(e) => filterShards(e.map(value => value.value))}
                        placeholder='Filter shards by hero'
                        classNamePrefix='statsHeroFilter'
                        className='statsHeroFilter'
                    />
                </div>
            </div>
        </div>
    )
}

export default StatsHeader