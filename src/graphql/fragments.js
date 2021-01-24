import { gql } from '@apollo/client'

export const COMPLETE_GUIDE = gql`
    fragment CompleteGuide on Guide {
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
`