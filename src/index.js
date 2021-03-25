import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import './image-gallery.css'
import './select-search.css'

import App from './App'
import hoverReducer from './redux/hoverReducer'

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
        // eslint-disable-next-line
        uri: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/graphql' : '/graphql',
    })
})

const store = createStore(hoverReducer)

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
)

