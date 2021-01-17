import React, { useState } from 'react'
import Items from '../Items'

const GuideLevels = ({ levels, talents }) => {
    const levelGrid = new Array(5).fill(null).map(_ => new Array(18).fill('blank'))
    console.log(levelGrid)
    return (
        <div className='levelGridParent'>
            {levelGrid.map((skill, skillKey) => {
                return (
                    <div key={skillKey} className='skillRow'>
                        {console.log(skill)}
                        {skill.map((level, levelKey) => {
                            return (
                                <div key={levelKey} className='levelCell'>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

const Shards = ({ shards }) => {
    return (
        <div>
            Shard ranking
        </div>
    )
}

const ShardCombos = ({ shardCombos }) => {
    return (
        <div>
            Shard combos
        </div>
    )
}

const GuideSegment = ({ section }) => {
    return (
        <div className='guideSection'>
            <div className='guideSectionTitle'>{section.groupName}</div>
            <div className='guideItems'>
                {section.items.map((x, key) => {
                    return <img
                        src={Items[x].link}
                        key={key}
                        className='itemIcon'
                    />
                })}
            </div>
        </div>
    )
}

const Guide = ({ guide }) => {
    const [currentTab, setTab] = useState('Items')
    const tabs = ['Items', 'Levelling', 'Shard Ranking', 'Shard combinations']
    console.log(currentTab)
    if (!guide) {
        return <div></div>
    }

    return (
        <div className='displayedGuide'>
            <div className='guideTitle'>{guide.title}</div>
            <div className='guideTabs'>
                {tabs.map((tab, key) => {
                    return (
                        <div
                            key={key}
                            className='guideTabLink'
                            onClick={() => setTab(tab)}
                        >
                            {tab}
                        </div>
                    )
                })}
            </div>
            <div className='guideItems' style={{ display: currentTab === 'Items' ? '' : 'none' }}>
                {guide.itemGroups.map((group, key) => <GuideSegment key={key} section={group} />)}
            </div>
            <div style={{ display: currentTab === 'Levelling' ? '' : 'none' }}>
                <GuideLevels levels={guide.levels} talents={guide.talents} />
            </div>
            <div style={{ display: currentTab === 'Shard Ranking' ? '' : 'none' }}>
                <Shards shards={guide.levels} />
            </div>
            <div style={{ display: currentTab === 'Shard combinations' ? '' : 'none' }}>
                <ShardCombos shardCombos={guide.shardCombos} />
            </div>
        </div>
    )
}

export default Guide