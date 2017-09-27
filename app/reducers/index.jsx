import { combineReducers } from 'redux'

import login from './login'
import modal from './modal'
import navbar from './navbar'

const connectApp = combineReducers({
   login,
   modal,
   navbar
})

export default connectApp