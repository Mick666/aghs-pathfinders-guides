import React from 'react'
import { Icon } from 'semantic-ui-react'

import Heroes from '../data/Heroes'
import { PaginationSmall } from './Pagination'

const GuideList = ({ currentGuide, setGuide, guides, forHeroPage, onPageChange, currentPage, totalGuides }) => {
    if (!guides || guides.length === 0) {
        return (
            <div className='guideListParent'>
            </div>
        )
    }
    return (
        <div className='guideListParent'>
            {totalGuides && totalGuides > 20 ? <PaginationSmall onPageChange={onPageChange} currentPage={Math.floor(currentPage / 20 + 1)} totalPages={Math.floor(totalGuides / 20 + 1)}/> : null}
            {guides.map((guide, key) => {
                const Hero = Heroes.filter(hero => hero.id === guide.hero)[0]
                const percentage = guide.rating[0] === 0 ? '100%' : (guide.rating[1] / guide.rating[0] * 100).toString().slice(0, 4) + '%'
                return (
                    <div
                        key={key}
                        className={`listedGuides ${currentGuide === key ? 'activeGuide' : ''}`}
                        onClick={() => setGuide(Number(key))}
                        data-index={key}
                    >
                        {forHeroPage ? null : <img className='guideListImage' src={Hero.image} ></img>}
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