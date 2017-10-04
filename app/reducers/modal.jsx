const modal = (state=[], action) => {
    switch (action.type) {
        case 'ADD_MODAL':
            return [{status: action.status, text: action.text}, ...state];
        case 'CLEAR_MODALS':
            return [];
        case 'REMOVE_MODAL':
            return state.filter(({status, text}) => text !== action.text);
        default:
            return state
    }
}

export default modal;