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
