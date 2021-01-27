import React, { useState } from 'react'
import Abilities from '../Abilities'

const CreateGuideLevels = ({ hero, selectedTalents, levels, setTalents, setLevels }) => {
    //eslint-disable-next-line
    const levelGrid = new Array(5).fill(null).map(_ => new Array(18).fill('blank'))
    const [errorMessage, setError] = useState('')

    function selectLevel(level, skill) {
        if (level < 9 && skill === 4) {
            setLevelError('Can\'t level a talent before level 10')
            return
        } else if (level < 14 && skill === 4 && levels.filter(lvl => lvl === 4).length > 0) {
            setLevelError('Can\'t level a second talent before level 15')
            return
        } else if (level === 16) {
            setLevelError('No available talent points at level 16')
            return
        }
        else if (level < 5 && skill === 3) {
            setLevelError('Can\'t level your ultimate before level 6')
            return
        } else if (level < 11 && skill === 3 && levels.filter(lvl => lvl === 3).length > 0) {
            setLevelError('Can\'t level your ultimate a second time before level 12')
            return
        } else if (level < 17 && skill === 3 && levels.filter(lvl => lvl === 3).length > 1) {
            setLevelError('Can\'t level your ultimate a third time before level 18')
            return
        } else if (levels.filter(lvl => lvl === skill).length === 4) {
            setLevelError('Skill already maxed')
            return
        } else if (skill === 4 && levels.filter(lvl => lvl === 4).length === 2) {
            setLevelError('No available talents to level')
            return
        }

        let updatedLevels = [...levels]
        updatedLevels[level] = skill
        setLevels(updatedLevels)
    }

    const setLevelError = (message) => {
        setError(message)
        setTimeout(() => setError(''), 2000)
    }

    function selectTalents(talent, level) {
        let updatedTalents = [...selectedTalents]
        updatedTalents[level] = talent
        setTalents(updatedTalents)
    }
    return (
        <div>
            <div  className='guideCreationLevels'>
                <div>
                    <h2 className='centerText bottomSpacing'>Levels</h2>
                    <div className='centerText bottomSpacing'>Click each box to show how to level each skill, and select the talents players should pick</div>
                </div>
                <div className={`errorMessage createGuideLevelTitle ${typeof errorMessage === 'number' ? 'hideText' : ''}`}>{errorMessage}</div>
                <div className='createGuideLevelGridParent'>
                    {levelGrid.map((skill, skillKey) => {
                        return (
                            <div key={skillKey} className='skillRowParent'>
                                <div>
                                    <img className='abilityImage' src={Abilities[hero.abilities[skillKey]].link} />
                                    <h4 className='abilityTitle'>{Abilities[hero.abilities[skillKey]].name}</h4>
                                </div>
                                <div className='skillRow'>
                                    {skill.map((level, levelKey) => {
                                        return (
                                            <div key={levelKey} className='levelCell' onClick={() => selectLevel(levelKey, skillKey)}>
                                                <div className={`${levels[levelKey] === skillKey ? 'selectedAbility' : ''}`}>{levels[levelKey] === skillKey ? levelKey + 1 : ''}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='talentParent'>
                <table className='talentTree'>
                    <tbody>
                        <th colSpan={3} className='talentHeader'>Talent Tree</th>
                        {hero.talents.map((talentRow, key) => {
                            return (
                                <tr key={key}>
                                    <td className={`talentCell ${talentRow[selectedTalents[key]] === talentRow[0] ? 'talentSelected' : ''}`}
                                        onClick={() => selectTalents(0, key)}
                                    >
                                        {talentRow[0]}
                                    </td>
                                    <th className={`talentMiddle talentLevel${key}`}>
                                        {talentRow[1]}
                                    </th>
                                    <td className={`talentCell ${talentRow[selectedTalents[key]] === talentRow[2] ? 'talentSelected' : ''}`}
                                        onClick={() => selectTalents(2, key)}
                                    >
                                        {talentRow[2]}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CreateGuideLevels