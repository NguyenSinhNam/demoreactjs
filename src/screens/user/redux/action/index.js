/**
 * Action creators User
 */

const LOAD_DATA = 'Load User'
const DATA_SUCCESS = 'Data Success'
const ADD_USER = 'Add User'
const ADD_SUCCESS = 'Add Success'

/**
 * loadData action creator
 * 
 * @param {Object} payload
 */
const loadData = (payload) => {
  return {
    type: LOAD_DATA,
    payload
  }
}

/**
 * dataSuccess action creator
 * 
 * @param {Object} res
 */
const dataSuccess = (res) => {
  return {
    type: DATA_SUCCESS,
    res
  }
}

/**
 * addUser action creator
 * 
 * @param {Object} res
 */
const addUser = (res) => {
  const data = res.payload
  return {
    type: ADD_USER,
    data
  }
}

const addSuccess = (res) => {
  return {
    type: ADD_SUCCESS,
    res
  }
}

// Export
export {
  LOAD_DATA,
  DATA_SUCCESS,
  ADD_USER,
  ADD_SUCCESS,
  loadData,
  dataSuccess,
  addUser,
  addSuccess,
}