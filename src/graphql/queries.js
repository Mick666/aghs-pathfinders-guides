import { gql } from '@apollo/client'
import { COMPLETE_GUIDE } from './fragments'

export const ALL_HEROGUIDES = gql`
    query allHeroGuides ($hero: String!) {
        allHeroGuides(hero: $hero) {
            ...CompleteGuide
        }
    }
    ${COMPLETE_GUIDE}
`

export const ALL_GUIDES = gql`
    query {
        allGuides {
            title
            createdAt
            rating
            id
            hero
            itemGroups {
                groupName
                items
            }
            selectedTalents
            levels
            shards
            shardCombinations {
                combination
                description
            }
        }
    }
`

export const HERO_STATS = gql`
    query {
        allMatchData {
            heroAsArray {
                deaths
                defeats
                hero
                totalGames
                victories
            }
        }
    }
`

export const SHARD_STATS = gql `
    query {
        allMatchData {
            shardWinrates {
                defeats
                hero
                shard
                totalGames
                victories
            }
        }
    }
`