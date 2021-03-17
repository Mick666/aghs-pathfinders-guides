import React, { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import ClickAwayListener from 'react-click-away-listener'

import { FormikGameSearch } from './FormikPremades'

const Header = () => {
    const { pathname } = useLocation()
    const [dropdown, setDropdown] = useState(false)
    const history = useHistory()

    const submitGame = (difficulty, matchId) => {
        console.log(difficulty, matchId)
        history.push(`games/${difficulty}/${matchId}`)
        setDropdown(false)
    }
    return (
        <div className='header'>
            <Link className='cleanLink' to='/'>
                <h1 className='headerTitle'>Aghanim&apos;s Pathfinders</h1>
            </Link>
            <div className='headerBar'>
                <div className='headerLinkParent'>
                    <Link className={`headerLinks cleanLink ${pathname.startsWith('/heroes') ? 'active' : ''}`} to='/heroes'>Heroes</Link>
                    <span className={`headerCurrentPage ${pathname.startsWith('/heroes') ? 'active' : ''}`} />
                </div>
                <div className='headerLinkParent'>
                    <Link className={`headerLinks cleanLink ${pathname === '/guides' ? 'active' : ''}`} to='/guides'>Guides</Link>
                    <span className={`headerCurrentPage ${pathname === '/guides' ? 'active' : ''}`} />
                </div>
                <div className='headerLinkParent'>
                    <Link className={`headerLinks cleanLink ${pathname === '/guides/create' ? 'active' : ''}`} to='/guides/create'>Create Guide</Link>
                    <span className={`headerCurrentPage ${pathname === '/guides/create' ? 'active' : ''}`} />
                </div>
                <div className='headerLinkParent'>
                    <Link className={`headerLinks cleanLink ${pathname === '/stats' ? 'active' : ''}`} to='/stats'>Statistics</Link>
                    <span className={`headerCurrentPage ${pathname === '/stats' ? 'active' : ''}`} />
                </div>
                <div className='headerLinkParent'>
                    <Link className={`headerLinks cleanLink ${pathname === '/games' ? 'active' : ''}`} to='/games'>Victorious Games</Link>
                    <span className={`headerCurrentPage ${pathname === '/games' ? 'active' : ''}`} />
                </div>
                <ClickAwayListener onClickAway={() => setDropdown(false)}>
                    <div className='headerLinkParent'>
                        <span className={`gamesearch-header-text cleanLink ${dropdown ? 'active' : ''}`} onClick={() => setDropdown(true)} >Find a game</span>
                        <span className={`gamesearch-tab ${dropdown ? 'active' : ''}`} />
                        <FormikGameSearch onSubmitFunc={submitGame} classProp={`flexRow ${dropdown ? 'active' : ''}`}/>
                    </div>
                </ClickAwayListener>
                {/* <div className='headerLinkParent'>
                    <Link className={`headerLinks cleanLink ${pathname === '/videos' ? 'active' : ''}`} to='/'>Videos</Link>
                    <span className={`headerCurrentPage ${pathname === '/videos' ? 'active' : ''}`}/>
                </div> */}

            </div>
        </div>
    )
}

export default Header