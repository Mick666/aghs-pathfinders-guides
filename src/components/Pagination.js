import React from 'react'
import { Icon } from 'semantic-ui-react'

export const PaginationSmall = ({ onPageChange, totalPages, currentPage }) => {
    console.log(totalPages, currentPage)
    return (
        <div className='flexRow paginationParent'>
            <div onClick={currentPage === 1 ? null : () => onPageChange('prev') }>
                <Icon name='angle double left' className={`${currentPage === 1 ? 'disabled' : ' blue'} large`}/>
            </div>
            <div onClick={currentPage === 1 ? null : () => onPageChange('prev') }>
                <Icon name='angle left' className={`${currentPage === 1 ? 'disabled' : ' blue'} large`}/>
            </div>
            <div onClick={currentPage === totalPages ? null : onPageChange }>
                <Icon name='angle right' className={`${currentPage === totalPages ? 'disabled' : ' blue'} large`}/>
            </div>
            <div onClick={currentPage === totalPages ? null : onPageChange }>
                <Icon name='angle double right' className={`${currentPage === totalPages ? 'disabled' : ' blue'} large`}/>
            </div>
        </div>
    )
}

export const PaginationLarge = ({ onPageChange, totalPages, currentPage, difficulty }) => {
    return (
        <div className='flexRow paginationParent'>
            <div onClick={currentPage === 1 ? null : () => onPageChange('start', difficulty) }>
                <Icon name='angle double left' className={`${currentPage === 1 ? 'disabled' : ' blue'} large`}/>
            </div>
            <div onClick={currentPage === 1 ? null : () => onPageChange('previous', difficulty) }>
                <Icon name='angle left' className={`${currentPage === 1 ? 'disabled' : ' blue'} large`}/>
            </div>
            <div onClick={currentPage === totalPages ? null : () => onPageChange('next', difficulty) }>
                <Icon name='angle right' className={`${currentPage === totalPages ? 'disabled' : ' blue'} large`}/>
            </div>
            <div onClick={currentPage === totalPages ? null : () => onPageChange('end', difficulty) }>
                <Icon name='angle double right' className={`${currentPage === totalPages ? 'disabled' : ' blue'} large`}/>
            </div>
        </div>
    )
}