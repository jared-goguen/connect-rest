import auth from '../api/auth';

const user = (state={}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {loggedIn: true, username: action.username};
        case 'LOGOUT':
            return {loggedIn: false, username: undefined};
        default:
            return auth.userState();
    }
}

export default user