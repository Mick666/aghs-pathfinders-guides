import React from 'react'
import changeLog from '../data/changeLog'
import ChangeLog from './ChangeLog'
import { MainGuides, MainGames } from './RecentContent'

const Main = () => {
    return (
        <div className='mainPage'>
            <div className='mainPageTopBar'>
                <MainGuides />
                <MainGames />
            </div>
            <div className='mainPageSidebar'>
                <a className='steamworkshopIcon' href='https://steamcommunity.com/sharedfiles/filedetails/?id=2208582400'>
                    <img
                        className='steamWorkshopImg'
                        src='https://steamuserimages-a.akamaihd.net/ugc/1747928426845848464/3329687EEE16D6D68348465EFEAF392347899FA5/'
                    />
                </a>
                <a className='discordIcon cleanLink' href='https://discord.gg/SwjCcH4'>
                    <div className='discordDetailsParent'>
                        <img className='discordImage' src='https://discordapp.com/assets/dd4dbc0016779df1378e7812eabaa04d.png' />
                        <div className='discordText'>Join the Aghanim&apos;s Pathfinders discord</div>
                    </div>
                    <span className='discordButton'>Join Server</span>
                </a>
                <a className='patreonSidebar' href='https://www.patreon.com/bePatron?u=24240916'>
                    <img src='https://cdn.iconscout.com/icon/free/png-256/patreon-1693553-1442594.png' className='patreonImage' />
                    <div id='patreonSupportText'>support the mod</div>
                    <div id='patreonEndText'>and get cosmetic rewards</div>
                </a>
            </div>
            <h2 id='changelogTitle'>RECENT CHANGES</h2>
            <div className='mainPageNewsContainer'>
                {changeLog.map((log, key) => <ChangeLog changeLog={log} key={key} />)}
            </div>
        </div>
    )
}

export default Main