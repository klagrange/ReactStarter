import { takeEvery } from 'redux-saga/effects'
import { mapValues, reduce } from 'lodash'

export const createSagaWatcher = sagas => Object
  .keys(sagas)
  .map(type => (function * () { yield takeEvery(type, sagas[type]) })())