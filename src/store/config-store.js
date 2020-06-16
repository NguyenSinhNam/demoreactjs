import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

const store = (rootReducer, rootSaga) => {
  const middleware = []
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  const store = createStore(rootReducer, applyMiddleware(...middleware))

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}

// Export
export default store