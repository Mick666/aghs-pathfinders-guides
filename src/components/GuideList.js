import React from 'react'
import { Icon } from 'semantic-ui-react'

import Heroes from '../Heroes'

const GuideList = ({ currentGuide, setGuide, guides }) => {
    if (!guides || guides.length === 0) {
        return (
            <div className='guideListParent'>
            </div>
        )
    }
    return (
        <div className='guideListParent'>
            {guides.map((guide, key) => {
                const Hero = Heroes.filter(hero => hero.id === guide.hero)[0]
                console.log(guide.rating)
                const percentage = guide.rating[0] === 0 ? '100%' : (guide.rating[1] / guide.rating[0] * 100).toString().slice(0, 4) + '%'
                return (
                    <div
                        key={key}
                        className={`listedGuides ${currentGuide === key ? 'activeGuide' : ''}`}
                        onClick={() => setGuide(Number(key))}
                        data-index={key}
                    >
                        <img className='guideListImage' src={Hero.image} ></img>
                        <div className='guideListText'>
                            <b>{guide.title}</b>
                            <div className='guideListDetails'>
                                <div className='guideCreationDate'>{guide.createdAt}</div>
                                <div className='guideRatingPercentage'>
                                    <Icon name='thumbs down outline' color='red' className='thumbIcon'/>
                                    <div className='guideRating guideCreationDate'>{percentage}</div>
                                    <Icon name='thumbs up outline' color='green' className='thumbIcon'/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default GuideList