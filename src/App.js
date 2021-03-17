import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'
import '../node_modules/semantic-ui-css/components/icon.css'
import '../node_modules/semantic-ui-css/components/loader.css'

import Main from './components/Main'
import HeroPage from './components/HeroPage'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroList from './components/HeroList'
import Heroes from './data/Heroes'
import AllGuides from './components/AllGuidesPage'
import CreateGuide from './components/CreateGuide/'
import AllStats from './components/AllStats'
import VictoriousGames from './components/VictoriousGames'
import ChangeLogInput from './components/ChangelogInput'
import IndividualGame from './components/IndividualGame'
import ScrollToTop from './components/ScrollToTop'

function App() {

    return (
        <Router>
            <Header />
            <div className='main'>
                <div>
                    <ScrollToTop />
                    <Switch>
                        <Route path='/heroes/:hero/:guide'>
                            <HeroPage />
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
                        <Route path='/stats'>
                            <AllStats />
                        </Route>
                        <Route path='/games/:difficulty/:matchId'>
                            <IndividualGame />
                        </Route>
                        <Route path='/games'>
                            <VictoriousGames />
                        </Route>
                        <Route path='/changelog'>
                            <ChangeLogInput />
                        </Route>
                        <Route path='/'>
                            <Main />
                        </Route>
                    </Switch>
                </div>
            </div>
            <div className='spacing'></div>
            <Footer />
        </Router>
    )
}

export default App
