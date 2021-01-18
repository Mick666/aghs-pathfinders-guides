import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'

import Main from './components/Main'
import HeroPage from './components/HeroPage'
import Guide from './components/Guide'
import Header from './components/Header'
import HeroList from './components/HeroList'
import Heroes from './Heroes'

function App() {
    return (
        <Router>
            <div className='headerDiv'>
                <Header />
            </div>
            <div className='main'>
                <div>
                    <Switch>
                        <Route path='/heroes/:hero/:guide'>
                            <Guide />
                        </Route>
                        <Route path='/heroes/:hero'>
                            <HeroPage />
                        </Route>
                        <Route path='/heroes'>
                            <HeroList heroes={Heroes} />
                        </Route>
                        <Route path='/'>
                            <Main />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
