import React, { useState } from 'react'

import GuideList from './GuideList'
import Guide from './Guide'
import { useQuery } from '@apollo/client'
import { ALL_GUIDES } from '../graphql/queries'

const AllGuides = () => {
    const [currentGuide, setGuide] = useState(0)
    const [currentTab, setCurrentTab] = useState('Items & Levelling')
    const [currentPage, setPage] = useState(0)
    const tabs = [
        ['Guides', ['Items & Levelling', 'Legendary Shards Ranking', 'Shard combinations']]
    ]
    const bannerURL = 'https://www.wallpapertip.com/wmimgs/64-640175_dota-wallpapers-1366768-all-hero-dota-2.jpg'

    const guides = useQuery(ALL_GUIDES, { variables: { first: 20 } })
    // console.log(guides)

    const fetchMore = (prevPage) => {
        console.log(currentPage, guides.data?.guideCount, prevPage === 'prev' ? currentPage - 20 : currentPage + 20)
        // if (currentPage < 0 || currentPage >= guides.data?.guideCount - 20) return
        guides.fetchMore({
            variables: {
                first: 20,
                after: prevPage === 'prev' ? currentPage - 20 : currentPage + 20
            }
        })
        setPage(prevPage === 'prev' ? currentPage - 20 : currentPage + 20)
    }

    return (
        <div className='heroPage'>
            <div className='heroHeader' style={{ backgroundImage: `linear-gradient(to bottom,rgba(23,23,23,.4) 0,rgba(23,23,23,.4) 435px,rgba(23,23,23,1) 585px,rgba(23,23,23,1) 100%), url(${bannerURL})` }}>
                <div className='heroHeaderTabs'>
                    {tabs.map((tab, key) => {
                        return (
                            <div className={'leftSpacing'} key={key}>
                                {tab[1].map((viewTab, index) => {
                                    return (
                                        <div className='guideTabLinkParent' key={index}>
                                            <div onClick={() => setCurrentTab(viewTab)}>
                                                <div className={`guideTabs guideTabLink ${currentTab === viewTab ? 'active' : ''}`}>{viewTab}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='guideGrid'>
                <GuideList
                    guides={guides.data?.allGuides}
                    currentGuide={currentGuide}
                    setGuide={setGuide}
                    onPageChange={fetchMore}
                    currentPage={currentPage}
                    totalGuides={guides.data?.guideCount}
                />
                <Guide guide={guides.data?.allGuides[currentGuide]} currentTab={currentTab} />
            </div>
        </div>
    )
}
export default AllGuides