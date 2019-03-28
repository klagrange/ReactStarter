import { createAction, createReducer } from 'redux-act';
import { put, call } from 'redux-saga/effects'
import { createSagaWatcher } from '../buddha'

/**
 * ACTIONS
 */
export const increment = createAction('increment the state');
export const decrement = createAction('decrement the state');
export const a = createAction('a');

/**
 * SAGAS
 */
export const sagas = {
  [a]: function * () {
    console.log('DREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMMMMMMMMMMMMMMMMMMMMMM')
  }
}
export const authSagaWatcher = createSagaWatcher(sagas)

/**
 * REDUCER
 */
export const authReducer = createReducer({
  // [a]: (state) => {
  //   console.log('!!!CONFLICT!!!')
  //   return state
  // },
  [increment]: (state) => {
    return state + 1 
  },
  [decrement]: (state) => { 
    return state - 1
  },
}, 0);



