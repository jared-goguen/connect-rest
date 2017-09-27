const modal = (state=[], action) => {
    switch (action.type) {
        case 'ADD_MODAL':
            return [{success: action.success, text: action.text}, ...state];
        case 'CLEAR_MODALS':
            return [];
        case 'REMOVE_MODAL':
            return state.filter(({success, text}) => text !== action.text);
        default:
            return state
    }
}

export default modal;