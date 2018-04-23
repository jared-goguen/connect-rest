import { combineReducers } from 'redux'

import user from './user'
import modal from './modal'
import navbar from './navbar'

const connectApp = combineReducers({
   user,
   modal,
   navbar
})

export default connectApp