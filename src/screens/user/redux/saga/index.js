/**
 * User saga
 */
import { takeEvery, put, call } from 'redux-saga/effects'
import { dataSuccess, addSuccess, LOAD_DATA, ADD_USER } from '../action'
// import { request } from '../../../../utils'
// import { ApiConst } from '../../../../configs'
import loadUser from './service'
import axios from 'axios'
/**
 * Get list user
 *
 * @param {Object} action
 */
const getListUser = function* (action) {
  const { limit } = action.payload.payload
  try {
    // call api here
    // const api = ApiConst.user.users
    // const url = api().url
    // const method = api().method
    //http://5a0e9d5db69ef50012be3690.mockapi.io/api/users
    const rs = yield axios.get('localhost:8080/user')
    console.log('result: ', rs)
    // const response = yield call(loadUser, { limit })
    // console.log('response: ', response)

    const data = [{ name: 'thuan default', age: '23', active: true }]
    yield put(dataSuccess(data))

  } catch (error) {
    // yield put(userFail())
  }
}
/**
 * Add user
 *
 * @param {Object} action
 */
const addUser = function* (action) {
  // const data = { name: 'thuandeptrai', age: '23' }
  // console.log('action at saga addUser: ', action)
  // check data pass to here
  // if ok
  yield put(addSuccess(action.data))

  // if not ok
  // put addNotSuccess
}

/**
 * watches action user
 */
const watchUser = function* () {
  yield takeEvery(LOAD_DATA, getListUser)
  yield takeEvery(ADD_USER, addUser)
}

// Export
export {
  watchUser
}