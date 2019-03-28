import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory as createHistory } from 'history'
import { all } from 'redux-saga/effects'
import { reducer as formReducer } from 'redux-form'
import { 
    homeReducer,
    homeSagaWatcher
} from './models'

/**
 * REDUCERS
 */
const rootReducer = combineReducers({
    router: routerReducer,
    form: formReducer,
    home: homeReducer
})

/**
 * HISTORY
 */
export const history = createHistory()
const reduxRouterMiddleware = routerMiddleware(history)

/**
 * MIDDLEWARES
 */
const sagaMiddleware = createSagaMiddleware()
const rootMiddleware = composeWithDevTools(applyMiddleware(
    sagaMiddleware,
    promiseMiddleware,
    reduxRouterMiddleware
))

function * rootSaga () {
    yield all([
        ...homeSagaWatcher,
    ])     
}

/**
 * ASSEMBLE
 */
const appDefaultState = {}
const store = createStore(rootReducer, appDefaultState, rootMiddleware)
sagaMiddleware.run(rootSaga)

export default store