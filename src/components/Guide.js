import React from 'react'
import Items from '../Items'

const GuideSegment = ({ section }) => {
    section.items.map(x => console.log(Items[x].link))
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
    return (
        <div className='displayedGuide'>
            <div className='guideTitle'>{guide.title}</div>
            {guide.itemGroups.map((group, key) => <GuideSegment key={key} section={group}/>)}
        </div>
    )
}

export default Guide