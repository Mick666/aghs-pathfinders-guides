import React from 'react'

const HeroHeader = ({ hero, currentTab, setCurrentTab, setCurrentView, currentView, hasCombos }) => {
    const tabs = [
        ['Guides', ['Items & Levelling', 'Legendary Shards Ranking', 'Shard combinations']],
        ['Stats', ['Grand Magus', 'Apex Mage', 'Sorcerer']]
    ]
    return (
        <div className='heroHeader' style={{ backgroundImage: `linear-gradient(to bottom,rgba(23,23,23,.4) 0,rgba(23,23,23,.4) 435px,rgba(23,23,23,1) 585px,rgba(23,23,23,1) 100%), url(${hero.banner})` }}>
            <div className='heroHeaderTabs'>
                <span className='heroTitle'>
                    {hero.name}
                </span>
                <div className='heroCurrentViewTabs flexRow'>
                    {tabs.map((view, key) => {
                        return (
                            <div className='headerLinkParent' key={key}>
                                <div
                                    className={`headerLinks ${currentView === view[0] ? 'active' : ''}`}
                                    onClick={() => {
                                        setCurrentView(view[0])
                                        setCurrentTab(view[1][0])
                                    }}
                                >
                                    {view[0]}
                                </div>
                            </div>
                        )
                    })}
                </div>
                {tabs.map((tab, key) => {
                    return (
                        <div className={`${currentView === tab[0] ? '' : 'hidden'} leftSpacing`} key={key}>
                            {tab[1].map((viewTab, index) => {
                                return (
                                    <div className='guideTabLinkParent' key={index}>
                                        {viewTab === 'Shard combinations' && !hasCombos ? null :
                                            <div onClick={() => setCurrentTab(viewTab)}>
                                                <div className={`guideTabs guideTabLink ${currentTab === viewTab ? 'active' : ''}`}>{viewTab}</div>
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HeroHeader