import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h1 className='headerTitle'>Aghanim&apos;s Pathfinders</h1>
            </div>
            <div className='headerLinkParent'>
                <Link className='headerLinks cleanLink' to='/'>Home</Link>
                <Link className='headerLinks cleanLink' to='/heroes'>Heroes</Link>
                <Link className='headerLinks cleanLink' to='/guides'>Guides</Link>
                <Link className='headerLinks cleanLink' to='/guides/create'>Create Guides</Link>
                <Link className='headerLinks cleanLink' to='/'>Videos</Link>
            </div>
        </div>
    )
}

export default Header