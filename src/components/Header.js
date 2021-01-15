import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h1>Aghanim&apos;s Pathfinders</h1>
            </div>
            <div className='headerLinks'>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
}

export default Header