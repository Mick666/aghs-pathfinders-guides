import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Loader } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'

import { VIC_GAMES } from '../../graphql/queries'
import Game from './Game'
import './index.css'
import { PaginationLarge } from '../Pagination'

const VictoriousGames = () => {
    const difficultyParam = useParams().difficulty
    const [currentTab, setCurrentTab] = useState(!difficultyParam || difficultyParam === '0' ? 'ApexMage' : difficultyParam === '1' ? 'GrandMagus' : 'Sorcerer')
    const [currentPage, setPage] = useState({ ApexMage: 0, GrandMagus: 0, Sorcerer: 0 })
    const difficultyToIndex = { ApexMage: 0, GrandMagus: 1, Sorcerer: 2 }
    const games = useQuery(VIC_GAMES, { variables: { difficulty: difficultyParam ? Number(difficultyParam) : 0, first: 10 } })

    if (!games || games.loading || !games.data) return (
        <div>
            <Loader active inverted>Loading</Loader>
        </div>
    )

    const switchDifficulty = (difficulty) => {
        setCurrentTab(difficulty)
        fetchMore('switch', difficulty)
        window.scrollTo(0, 0)
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
        <div className='games-root'>
            <div className='games-difficulty-header flexRow'>
                <span className={`guideTabLink ${currentTab === 'ApexMage' ? 'active' : ''}`} onClick={() => switchDifficulty('ApexMage')}>
                    Apex Mage
                </span>
                <span className={`guideTabLink ${currentTab === 'GrandMagus' ? 'active' : ''}`} onClick={() => switchDifficulty('GrandMagus')}>
                    Grand Magus
                </span>
                <span className={`guideTabLink ${currentTab === 'Sorcerer' ? 'active' : ''}`} onClick={() => switchDifficulty('Sorcerer')}>
                    Sorcerer
                </span>
            </div>
            <PaginationLarge onPageChange={fetchMore} currentPage={Math.floor(currentPage[currentTab] / 10 + 1)} totalPages={Math.floor(games.data.victoriousMatchesCount / 10) + 1} difficulty={currentTab} />
            {games.data.victoriousMatches.map((match, key) => <Game key={key} match={match}/>)}
            <PaginationLarge onPageChange={fetchMore} currentPage={Math.floor(currentPage[currentTab] / 10 + 1)} totalPages={Math.floor(games.data.victoriousMatchesCount / 10) + 1} difficulty={currentTab} />
        </div>
    )
}

export default VictoriousGames