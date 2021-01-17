import React from 'react'

import Guides from '../Guides'

const GuideList = ({ hero, currentGuide, setGuide }) => {
    const guides = Guides.filter(x => x.hero === hero)

    return (
        <div className='guideListParent'>
            {guides.map((guide, key) => {
                return (
                    <div
                        to={`/heroes/${hero}/${guide.id}`}
                        key={key}
                        className={`listedGuides ${currentGuide === key ? 'activeGuide' : ''}`}
                        onClick={() => setGuide(Number(key))}
                        data-index={key}
                    >
                        <b>{guide.title}</b>
                        <div className='guideListDetails'>
                            <div className='guideCreationDate'>{guide.createdAt}</div>
                            <div className='guideRating guideCreationDate'>{guide.rating}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default GuideList