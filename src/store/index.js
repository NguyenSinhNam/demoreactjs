import rootSaga from './saga'
import configStore from './config-store'
import rootReducer from './reducers'
const reduxStore = () => {
  return configStore(rootReducer, rootSaga)
}

// Export
export default reduxStore