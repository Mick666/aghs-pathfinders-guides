const initialState = { position: { left: 0, top: 0 }, element: null }

const hoverReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_HOVER':
            if (!state.element) return state
            return { ...state, position: action.data }
        case 'SET_HOVER':
            return { position: action.position, element: action.data }
        case 'REMOVE_HOVER':
            return { ...state, element: null }
        default:
            return state
    }
}

export const updateMousePosition = (position) => {
    return {
        type: 'UPDATE_HOVER',
        data: { position }
    }
}

export const removeHoverElement = () => {
    return {
        type: 'REMOVE_HOVER'
    }
}

export const setHoverElement = (type, position, data) => {
    return {
        type: 'SET_HOVER',
        data: {
            data: data,
            type: type
        },
        position: { top: position.pageY, left: position.pageX }
    }
}

export default hoverReducer