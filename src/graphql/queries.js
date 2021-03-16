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

export const SINGLE_HEROSTATS = gql`
query heroStats($hero: String!){
    heroStats(hero: $hero) {
      shardWinrates {
        defeats
        hero
        shard
        totalGames
        victories
      }
      singleHeroStats {
        deaths
        defeats
        hero
        totalGames
        victories
      }
    }
  }
`

export const ALL_GUIDES = gql`
    query allGuides($first: Int, $after: Int) {
        allGuides(first: $first, after: $after) {
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
        guideCount
    }
`

export const RECENT_GUIDES = gql`
    query homePage {
        allGuides(first: 3) {
            title
            createdAt
            rating
            id
            hero
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
                heroId
                totalGames
                victories
            }
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

export const SHARD_STATS = gql`
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

export const VIC_GAMES = gql`
query victoriousMatches($difficulty: Int!, $first: Int, $after: Int)  {
    victoriousMatches(difficulty: $difficulty, first: $first, after: $after) {
        levelData {
          rooms {
            lives_lost
            picked_name
            unpicked_name
            picked_elite
            unpicked_elite
          }
        }
        players {
          damage_dealt
          damage_taken
          deaths
          depth
          hero
          items
          upgrades
        }
        matchId
    }
    victoriousMatchesCount(difficulty: $difficulty)
  }
`

export const ALL_CHANGELOGS = gql`
  query {
        allChangelogs {
            title
            changes
        }
    }
`

export const INDIVIDUAL_GAME = gql`
    query individualGame($difficulty: String!, $matchId: String!) {
        individualGame(difficulty: $difficulty, matchId: $matchId) {
            levelData {
                rooms {
                  lives_lost
                  picked_name
                  unpicked_name
                  picked_elite
                  unpicked_elite
                }
            }
            players {
                damage_dealt
                damage_taken
                deaths
                depth
                hero
                items
                upgrades
            }
        }
    }
`