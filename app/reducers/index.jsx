import { combineReducers } from 'redux'

import login from './login'

const connectApp = combineReducers({
   login
})

export default connectApp