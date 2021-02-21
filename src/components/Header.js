import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <div className='header'>
            <h1 className='headerTitle'>Aghanim&apos;s Pathfinders</h1>
            <div className='headerBar'>
                <div className='headerLinkParent'>
                    <Link className={`headerLinks cleanLink ${pathname === '/' ? 'active' : ''}`} to='/'>Home</Link>
                    <span className={`headerCurrentPage ${pathname === '/' ? 'active' : ''}`}/>
                </div>
                <div className='headerLinkParent'>
                    <Link className={`headerLinks cleanLink ${pathname.startsWith('/heroes') ? 'active' : ''}`} to='/heroes'>Heroes</Link>
                    <span className={`headerCurrentPage ${pathname.startsWith('/heroes') ? 'active' : ''}`}/>
                </div>
                <div className='headerLinkParent'>
                    <Link className={`headerLinks cleanLink ${pathname === '/guides' ? 'active' : ''}`} to='/guides'>Guides</Link>
                    <span className={`headerCurrentPage ${pathname === '/guides' ? 'active' : ''}`}/>
                </div>
                <div className='headerLinkParent'>
                    <Link className={`headerLinks cleanLink ${pathname === '/guides/create' ? 'active' : ''}`} to='/guides/create'>Create Guide</Link>
                    <span className={`headerCurrentPage ${pathname === '/guides/create' ? 'active' : ''}`}/>
                </div>
                <div className='headerLinkParent'>
                    <Link className={`headerLinks cleanLink ${pathname === '/stats' ? 'active' : ''}`} to='/stats'>Statistics</Link>
                    <span className={`headerCurrentPage ${pathname === '/stats' ? 'active' : ''}`}/>
                </div>
                <div className='headerLinkParent'>
                    <Link className={`headerLinks cleanLink ${pathname === '/videos' ? 'active' : ''}`} to='/'>Videos</Link>
                    <span className={`headerCurrentPage ${pathname === '/videos' ? 'active' : ''}`}/>
                </div>

            </div>
        </div>
    )
}

export default Header