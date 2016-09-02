const initialState = {
  user: {
    id: null,
    name: null,
    age: null
  },
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

export default function reducer (state=initialState, action) {
  switch (action.type) {
    case "FETCH_USERS_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_USERS_ERROR": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_USERS_FULFILLED": {
      return {...state, fetching: false, fetched: true, users: action.payload}
    }
    case "SET_USER_NAME": {
      return {...state, name: action.payload}
    }
    case "SET_USER_AGE": {
      return {...state, age: action.payload}
    }
  }
  return state
}