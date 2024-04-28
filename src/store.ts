import { combineReducers, legacy_createStore as createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { storageReducers } from './redux/reducers/LocalStorageReducers'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  storage: storageReducers,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
