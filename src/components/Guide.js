import React from 'react'

import Items from '../data/Items'
import Abilities from '../data/Abilities'
import Heroes from '../data/Heroes'
import Shards from '../data/Shards'

const GuideLevels = ({ levels, selectedTalents, hero }) => {
    //eslint-disable-next-line
    const levelGrid = new Array(5).fill(null).map(_ => new Array(18).fill('blank'))
    return (
        <div>

            <div className='levelGridParent'>
                <h2 className='levelGridTitle'>Levels</h2>
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
                                        <div key={levelKey} className='levelCell'>
                                            {levels[levelKey] === skillKey ?
                                                <div className='selectedAbility'>{levelKey + 1}</div> :
                                                null
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='talentParent'>
                <table className='talentTree'>
                    <tbody>
                        <tr>
                            <th colSpan={3} className='talentHeader'>Talent Tree</th>
                        </tr>
                        {hero.talents.map((talentRow, key) => {
                            return (
                                <tr key={key} className='talentTableEls'>
                                    <td className={`talentTableEls talentCell ${talentRow[selectedTalents[key]] === talentRow[0] ? 'talentSelected' : ''}`}>
                                        {talentRow[0]}
                                    </td>
                                    <td className={`talentTableEls talentMiddle talentLevel${key}`}>
                                        {talentRow[1]}
                                    </td>
                                    <td className={`talentTableEls talentCell ${talentRow[selectedTalents[key]] === talentRow[2] ? 'talentSelected' : ''}`}>
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

const ShardRankings = ({ shards }) => {
    return (
        <div className='shardRankings'>
            {shards.map((shard, key) => {
                return (
                    <div key={key} className='shardRankingParent'>
                        <span className='shardRankingNumber'>{key+1}</span>
                        <img src={Abilities[Shards[shard].skill].link} className='shardImage' />
                        <div>
                            <h3 className='shardTitle' >{Shards[shard].name}</h3>
                            <div className='shardDescription' >{Shards[shard].description}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const ShardCombos = ({ shardCombos }) => {
    if (!shardCombos) return (
        <div className='shardCombinationParent'>
            No shard combinations listed so far: Why not suggest one?
        </div>
    )
    return (
        <div>
            {shardCombos.map((combos, key) => {
                return (
                    <div key={key} className='shardCombo'>
                        <div className='shardComboDescription'>{combos.description}</div>
                        <div className='shardComboCell'>
                            {combos.combination.map((shard, key) => {
                                return (
                                    <div key={key} className='shardComboShard'>
                                        <img src={Abilities[Shards[shard].skill].link} className='shardComboImage' />
                                        <h3 className='shardComboTitle shardTitle' >{Shards[shard].name}</h3>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const GuideSegment = ({ section }) => {
    return (
        <div className='guideSection'>
            <div className='guideSectionTitle'>{section.groupName}</div>
            <div className='guideItems'>
                {section.items.map((x, key) => {
                    return (<div key={key} className='itemCell'>
                        <img
                            src={Items[x] ? Items[x].link : ''}
                            className='itemIcon'
                        />
                        <div className='itemText'>{Items[x] ? Items[x].name : x}</div>
                    </div>
                    )
                })}
            </div>
            <span className='guideSectionBackground' />
        </div>
    )
}

const Guide = ({ guide, currentTab }) => {
    if (!guide) {
        return <div className='displayedGuide'>No guides available</div>
    }

    const hero = Heroes.filter(x => x.id === guide.hero)[0]


    return (
        <div className='displayedGuide'>
            <div style={{ display: currentTab === 'Items & Levelling' ? '' : 'none' }}>
                <h2 className='levelGridTitle'>Items</h2>
                <div className='itemGroupContainer'>
                    {guide.itemGroups.map((group, key) => <GuideSegment key={key} section={group} />)}
                </div>
                <GuideLevels levels={guide.levels} selectedTalents={guide.selectedTalents} hero={hero} />
            </div>
            <div style={{ display: currentTab === 'Legendary Shards Ranking' ? '' : 'none' }}>
                <ShardRankings shards={guide.shards} />
            </div>
            <div style={{ display: currentTab === 'Shard combinations' ? '' : 'none' }}>
                <ShardCombos shardCombos={guide.shardCombinations} />
            </div>
        </div>
    )
}

export default Guide