import { createStore, Store, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer, { AppState } from './rootReducer'

export default function configureStore(): Store<AppState> {
  return createStore(
    rootReducer,
    applyMiddleware(thunk),
  )
}
