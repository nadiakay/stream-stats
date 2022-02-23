import { combineReducers } from 'redux'

import artistsReducer from './artists'

const rootReducer = combineReducers({
  artists: artistsReducer,
})

export default rootReducer
