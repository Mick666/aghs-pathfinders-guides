import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_CHANGELOG } from '../graphql/mutations'

const ChangeLogInput = () => {
    const [title, setTitle] = useState('')
    const [changes, setChanges] = useState('')
    const [addChangelog] = useMutation(ADD_CHANGELOG)

    const handleSubmit = () => {
        addChangelog({ variables: { title: title, changes: changes.split('\n').filter(change => change.length > 1) } })
        setTitle('')
        setChanges('')
    }
    return (
        <div className='flexColumn'>
            <span>Title:</span>
            <input onChange={(e) => setTitle(e.target.value)} value={title} />
            <span>Changes:</span>
            <textarea onChange={(e) => setChanges(e.target.value)} value={changes} rows='20' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default ChangeLogInput