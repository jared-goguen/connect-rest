const navbar = (state={}, action) => {
    switch (action.type) {
        case 'SET_ACTIVE':
            return {...state, active: action.active}
        default:
            return {...state, active: ''}
    }
}

export default navbar;