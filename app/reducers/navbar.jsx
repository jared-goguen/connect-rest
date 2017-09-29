const navbar = (state={}, action) => {
    switch (action.type) {
        case 'SET_ACTIVE':
            return {...state, active: action.active}
        case 'TOGGLE_OPEN':
        	return {...state, open: !state.open}
        default:
            return {...state, open: true, width: 150}
    }
}

export default navbar;