import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './image-gallery.css'
import './select-search.css'
import App from './App'

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                allGuides: {
                    keyArgs: false,
                    // eslint-disable-next-line no-unused-vars
                    merge(existing = [], incoming) {
                        return [...incoming]
                    },
                },
                victoriousMatches: {
                    keyArgs: false,
                    // eslint-disable-next-line no-unused-vars
                    merge(existing = [], incoming) {
                        return [...incoming]
                    },
                }
            }
        }
    }
})


const client = new ApolloClient({
    cache: cache,
    link: new HttpLink({
        uri: 'http://localhost:4000/graphql',
    })
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)

