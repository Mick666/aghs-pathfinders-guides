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
            <h2 id='changelogTitle'>RECENT CHANGES</h2>
            <div className='mainPageNewsContainer'>
                {changeLog.map((log, key) => <ChangeLog changeLog={log} key={key} />)}
            </div>
        </div>
    )
}

export default Main