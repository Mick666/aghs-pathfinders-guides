import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Loader } from 'semantic-ui-react'

import { VIC_GAMES } from '../../graphql/queries'
import Game from './Game'
import './index.css'
import { PaginationLarge } from '../Pagination'
import { HoverShard } from '../HoverElement'

const VictoriousGames = () => {
    const [currentTab, setCurrentTab] = useState('GrandMagus')
    const [currentPage, setPage] = useState({ GrandMagus: 0, ApexMage: 0, Sorcerer: 0 })
    const [position, setPosition] = useState({ top: 0, left: 0 })
    const [shard, setShard] = useState(null)
    const difficultyToIndex = { GrandMagus: 0, ApexMage: 1, Sorcerer: 2 }
    const games = useQuery(VIC_GAMES, { variables: { difficulty: 0, first: 10 } })

    if (!games || games.loading || !games.data) return (
        <div>
            <Loader active inverted>Loading</Loader>
        </div>
    )

    const switchDifficulty = (difficulty) => {
        setCurrentTab(difficulty)
        fetchMore('switch', difficulty)
    }

    const fetchMore = (direction, difficulty) => {
        let variables, updatedPage
        switch (direction) {
        case 'switch':
            variables = { first: 10, after: currentPage[difficulty], difficulty: difficultyToIndex[difficulty] }
            updatedPage = currentPage
            break
        case 'start':
            variables = { first: 10, after: 0, difficulty: difficultyToIndex[difficulty] }
            updatedPage = { ...currentPage }
            updatedPage[difficulty] = 0
            break
        case 'end':
            variables = { first: 10, after: games.data.victoriousMatchesCount - (games.data.victoriousMatchesCount % 10), difficulty: difficultyToIndex[difficulty] }
            updatedPage = { ...currentPage }
            updatedPage[difficulty] = games.data.victoriousMatchesCount - (games.data.victoriousMatchesCount % 10)
            break
        case 'next':
            variables = { first: 10, after: currentPage[difficulty] + 10, difficulty: difficultyToIndex[difficulty] }
            updatedPage = { ...currentPage }
            updatedPage[difficulty] = currentPage[difficulty] + 10
            break
        case 'previous':
            variables = { first: 10, after: currentPage[difficulty] - 10, difficulty: difficultyToIndex[difficulty] }
            updatedPage = { ...currentPage }
            updatedPage[difficulty] = currentPage[difficulty] - 10
            break
        }
        games.fetchMore({ variables: { ...variables } })
        setPage(updatedPage)
    }
    return (
        <div className='games-root' onMouseMove={(e) => setPosition({ top: e.pageY, left: e.pageX })}>
            <HoverShard position={position} shard={shard}/>
            <div className='games-difficulty-header flexRow'>
                <span className={`guideTabLink ${currentTab === 'GrandMagus' ? 'active' : ''}`} onClick={() => switchDifficulty('GrandMagus')}>
                    Grand Magus
                </span>
                <span className={`guideTabLink ${currentTab === 'ApexMage' ? 'active' : ''}`} onClick={() => switchDifficulty('ApexMage')}>
                    Apex Mage
                </span>
                <span className={`guideTabLink ${currentTab === 'Sorcerer' ? 'active' : ''}`} onClick={() => switchDifficulty('Sorcerer')}>
                    Sorcerer
                </span>
            </div>
            <PaginationLarge onPageChange={fetchMore} currentPage={Math.floor(currentPage[currentTab] / 10 + 1)} totalPages={Math.floor(games.data.victoriousMatchesCount / 10) + 1} difficulty={currentTab}/>
            {games.data.victoriousMatches.map((match, key) => <Game key={key} match={match} setShard={setShard}/>)}
        </div>
    )
}

export default VictoriousGames