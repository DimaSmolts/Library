import { combineReducers } from 'redux'
import { bookReducer } from './reducers/bookReducer'
import { bookListReducer } from './reducers/bookListReducer'
import { searchReducer } from './reducers/searchReducer'

const rootReducer = combineReducers({
  bookReducer,
  bookListReducer,
  searchReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
