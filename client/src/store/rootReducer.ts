import { combineReducers } from 'redux'
import { bookReducer } from './reducers/bookReducer'
import { bookListReducer } from './reducers/bookListReducer'

const rootReducer = combineReducers({
  bookReducer,
  bookListReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
