import React from 'react'

const ChangeLog = ({ changeLog }) => {
    return (
        <div className='changeLogItem'>
            <h4 className='changeLogTitle'>{changeLog.title}</h4>
            <ul className='changeLogList'>
                {changeLog.details.map((change, key) => <li key={key}>{change}</li>)}
            </ul>
        </div>
    )
}

export default ChangeLog