const modal = (state=[], action) => {
    switch (action.type) {
        case 'ADD_MODAL':
            return [{success: action.success, text: action.text}, ...state]
        case 'CLEAR_MODALS':
        	return []
        default:
            return state
    }
}

export default modal;