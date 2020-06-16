/**
 * Root saga fork some watchSagaAction
 */
// import { takeLatest, all } from 'redux-saga/effects'
// // import loadUser from '../../screens/user/redux/saga'
// import { loadUser, addUser } from '../../screens/user/redux/saga'


// export default function* root() {
//   yield all([
//     takeLatest('LOAD_DATA_USER', loadUser),
//     takeLatest('ADD_USER', addUser)
//     // take anymore
//   ])
// }
import { fork, all } from 'redux-saga/effects'
import { watchUser } from '../../screens/user/redux/saga'
export default function* rootSaga() {
  // fork every watchSaga
  yield all([
    fork(watchUser)
  ])
}