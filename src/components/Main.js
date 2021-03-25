import React from 'react'
import { useQuery } from '@apollo/client'
import { Loader } from 'semantic-ui-react'

import ChangeLog from './ChangeLog'
import RecentContent from './RecentContent'
import { HOMEPAGE_CONTENT } from '../graphql/queries'

const Main = () => {
    const homePageContent = useQuery(HOMEPAGE_CONTENT)
    return (
        <div className='mainPage'>
            <RecentContent homePageContent={homePageContent?.data?.homePageData} />
            <h2 id='changelogTitle'>RECENT CHANGES</h2>
            <div className='mainPageNewsContainer'>
                {homePageContent.data ? homePageContent.data.homePageData.changelogs.map((log, key) => <ChangeLog changeLog={log} key={key} />) : <Loader active inverted>Loading</Loader>}
            </div>
        </div>
    )
}

export default Main