/**
 * User reducer
 */
import { DATA_SUCCESS, ADD_USER, ADD_SUCCESS } from '../action'
import { fromJS } from 'immutable'

// Init state
const INITSTATE = fromJS({
  isFetching: false,
  data: []
})

// Export
export default (state = INITSTATE, action) => {
  switch (action.type) {
    case DATA_SUCCESS: {
      return fromJS({
        isFetching: state.get('isFetching'),
        data: state.get('data').concat(action.res)
      })
    }
    case ADD_USER: {
      return state.set('isFetching', true)
    }
    case ADD_SUCCESS: {
      return fromJS({
        isFetching: false,
        data: state.get('data').concat(action.res)
      })
    }
    default:
      return state
  }
}
