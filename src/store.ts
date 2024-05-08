import { combineReducers, legacy_createStore as createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { storageReducers } from './redux/reducers/LocalStorageReducers'
import { companyInfoReducer } from './redux/reducers/companyInfoReducer'
import { clientInfoReducer } from './redux/reducers/ClientInfoReducer '

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  storage: storageReducers,
  conpanyInfo : companyInfoReducer,
  clientInfo : clientInfoReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
