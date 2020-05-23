import { combineReducers } from 'redux'
import { bookReducer } from './reducers/bookReducer'

const rootReducer = combineReducers({
  bookReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
