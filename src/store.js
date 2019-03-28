import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory as createHistory } from 'history'

import { reducer as formReducer } from 'redux-form'

import { 
    authReducer,
    authSagaWatcher
} from './models'

/**
 * REDUCERS
 */
const rootReducer = combineReducers({
    router: routerReducer,
    form: formReducer,
    auth: authReducer
})

/**
 * SAGAS
 */
const sagaMiddleware = createSagaMiddleware()

/**
 * HISTORY
 */
export const history = createHistory()
const reduxRouterMiddleware = routerMiddleware(history)

/**
 * MIDDLEWARES
 */
const rootMiddleware = composeWithDevTools(applyMiddleware(
    sagaMiddleware,
    promiseMiddleware,
    reduxRouterMiddleware
))

function * rootSaga () {
    yield [
      ...authSagaWatcher,
    ]
}

/**
 * ASSEMBLE
 */
const appDefaultState = {}
const store = createStore(rootReducer, appDefaultState, rootMiddleware)
sagaMiddleware.run(rootSaga)

// store.dispatch({ type: '[2] increment the state' })
// store.dispatch({ type: '[2] increment the state' })
// store.dispatch({ type: '[2] increment the state' })
// store.dispatch({ type: '[2] increment the state' })
// store.dispatch({ type: '[4] a' })

// const products = () => console.log()
// store.dispatch({ type: 'PRODUCTS_RECEIVED' })

export default store