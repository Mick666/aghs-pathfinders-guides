import React from 'react'
import { useQuery } from '@apollo/client'
import { Loader } from 'semantic-ui-react'

import ChangeLog from './ChangeLog'
import { MainGuides, MainGames } from './RecentContent'
import { ALL_CHANGELOGS } from '../graphql/queries'

const Main = () => {
    const changelog = useQuery(ALL_CHANGELOGS)

    return (
        <div className='mainPage'>
            <div className='mainPageTopBar'>
                <MainGuides />
                <MainGames />
            </div>
            <h2 id='changelogTitle'>RECENT CHANGES</h2>
            <div className='mainPageNewsContainer'>
                {changelog.data ? changelog.data.allChangelogs.map((log, key) => <ChangeLog changeLog={log} key={key} />) : <Loader active inverted>Loading</Loader>}
            </div>
        </div>
    )
}

export default Main