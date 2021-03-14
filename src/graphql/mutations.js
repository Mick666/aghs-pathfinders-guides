import { gql } from '@apollo/client'
import { COMPLETE_GUIDE } from './fragments'

export const ADD_GUIDE = gql`
    mutation addGuide($title: String!, $createdAt: String!, $rating: [Int!]!, $hero: String!, $itemGroups: [itemGroupInput!]!, $selectedTalents: [Int!]!, $levels: [Int!]!, $shards: [String!]!, $shardCombinations: [shardCombinationInput!]!) {
        addGuide(
            title: $title,
            createdAt: $createdAt,
            rating: $rating,
            hero: $hero,
            itemGroups: $itemGroups,
            selectedTalents: $selectedTalents,
            levels: $levels,
            shards: $shards,
            shardCombinations: $shardCombinations
        ) {
            ...CompleteGuide
        }
    }
    ${COMPLETE_GUIDE}
`

export const ADD_CHANGELOG = gql`
    mutation addChangelog($title: String!, $changes: [String!]!) {
        addChangelog(
            title: $title
            changes: $changes
        ) {
            title
            changes
        }
    }
`