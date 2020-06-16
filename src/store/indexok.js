import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import { watcherSaga } from '../screens/user/redux/saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
// run the saga
sagaMiddleware.run(watcherSaga);

export {
  store
}