export const LOGIN = () => {
    return {
        type: 'LOGIN'
    }
}

export const LOGOUT = () => {
    return {
        type: 'LOGOUT'
    }
}

export const ADD_MODAL = (success, text) => {
    return {
        type: 'ADD_MODAL',
        success,
        text
    }
}

export const CLEAR_MODALS = () => {
    return {
        type: 'CLEAR_MODALS',
    }
}