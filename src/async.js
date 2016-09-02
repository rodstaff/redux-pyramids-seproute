import {applyMiddleware, createStore} from 'redux'
import axios from 'axios'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_PENDING": {
      return {...state, fetching: true}
      break;
    }
    case "fetch_users_error": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "FETCH_USERS_FULFILLED": {
      return {...state, fetching: false, fetched: true, users: action.payload}
      break;
    }
  }
  return state
}

const middleware = applyMiddleware(promise(), thunk, logger())

const store = createStore(reducer, middleware)

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})
// store.dispatch((dispatch) => {
//   dispatch({type:  "fetch_users_start"})
//   axios.get("http://rest.learncode.academy/api/wstern/users")
//     .then((response) => {
//       dispatch({type:  "receive_users", payload: response.data})
//     })
//     .catch((err) => {
//       dispatch({type: "fetch_users_error", payload: err})
//     })
// })
