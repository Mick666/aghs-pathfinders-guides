import React from 'react'

const Guide = ({ guide }) => {
    return (
        <div className='displayedGuide'>
            {guide.title}
        </div>
    )
}

export default Guide