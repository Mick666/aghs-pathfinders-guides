import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <h1 className='headerTitle'>Aghanim&apos;s Pathfinders</h1>
            <div className='headerLinkParent'>
                <Link className='headerLinks cleanLink' to='/'>Home</Link>
                <Link className='headerLinks cleanLink' to='/heroes'>Heroes</Link>
                <Link className='headerLinks cleanLink' to='/guides'>Guides</Link>
                <Link className='headerLinks cleanLink' to='/guides/create'>Create Guide</Link>
                <Link className='headerLinks cleanLink' to='/stats'>Statistics</Link>
                <Link className='headerLinks cleanLink' to='/'>Videos</Link>
            </div>
        </div>
    )
}

export default Header