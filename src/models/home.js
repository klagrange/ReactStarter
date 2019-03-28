import { createAction, createReducer } from 'redux-act';
import { put, call, delay } from 'redux-saga/effects'
import { createSagaWatcher } from 'buddha'
import * as svc from 'services/home'

/**
 * ACTIONS
 */
export const getUsers = createAction('getUsers', (users) => ({ users }));
export const getUsersOK = createAction('getUsersOK', (users) => ({ users }));
export const getUsersNOK = createAction('getUsersNOK');

/**
 * SAGAS
 */
export const sagas = {
  [getUsers]: function * () {
    yield delay(2000)

    const { data, status } = yield call(svc.getUsers)

    status === 200
      ? yield put(getUsersOK(data))
      : yield put(getUsersNOK())
  }
}
export const homeSagaWatcher = createSagaWatcher(sagas)

/**
 * REDUCER
 */
export const initialState = {
  users: []
}
export const homeReducer = createReducer({
  [getUsersOK]: (state, { users }) => ({
    ...state,
    users
  }),
  [getUsersNOK]: (state) => ({ 
    ...state,
  }),
}, initialState);



