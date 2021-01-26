import React from 'react'

const GuideList = ({ currentGuide, setGuide, guides }) => {
    if ( !guides || guides.length === 0) {
        return (
            <div className='guideListParent'>
            </div>
        )
    }
    return (
        <div className='guideListParent'>
            {guides.map((guide, key) => {
                return (
                    <div
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