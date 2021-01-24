import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'

import Main from './components/Main'
import HeroPage from './components/HeroPage'
import Guide from './components/Guide'
import Header from './components/Header'
import HeroList from './components/HeroList'
import Heroes from './Heroes'
import AllGuides from './components/AllGuidesPage'
import CreateGuide from './components/CreateGuide'

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
                        <Route path='/guides/create'>
                            <CreateGuide />
                        </Route>
                        <Route path='/guides'>
                            <AllGuides />
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
