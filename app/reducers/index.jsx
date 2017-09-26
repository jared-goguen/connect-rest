import { combineReducers } from 'redux'

import login from './login'
import modal from './modal'

const connectApp = combineReducers({
   login,
   modal
})

export default connectApp