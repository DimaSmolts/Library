import { combineReducers } from 'redux'
import { bookReducer } from './reducers/bookReducer'
import { bookListReducer } from './reducers/bookListReducer'
import { cartReducer } from './reducers/cartReducer'

const rootReducer = combineReducers({
  bookReducer,
  bookListReducer,
  cartReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
