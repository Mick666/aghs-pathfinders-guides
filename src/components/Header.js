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
                <Link className='headerLinks cleanLink' to='/'>Heroes</Link>
                <Link className='headerLinks cleanLink' to='/'>Guides</Link>
                <Link className='headerLinks cleanLink' to='/'>Videos</Link>
            </div>
        </div>
    )
}

export default Header