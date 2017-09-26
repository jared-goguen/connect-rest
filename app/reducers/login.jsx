import auth from '../api/auth';

const login = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return auth.loggedIn();
    }
}

export default login