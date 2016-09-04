const initialState = {
  user: {
    id: "",
    name: "",
    age: 0
  },
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

export default function reducer (state=initialState, action) {
  switch (action.type) {
    case "FETCH_USER": {
      return {
        ...state, 
        fetching: true
      };
    }
    case "FETCH_USER_REJECTED": {
      return {
        ...state, 
        fetching: false, 
        error: action.payload
      };
    }
    case "FETCH_USER_FULFILLED": {
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        user: action.payload
      };
    }
    case "SET_USER_NAME": {
      return {
        ...state, 
        user: {...state.user, name: action.payload}
      };
    }
    case "SET_USER_AGE": {
      return {
        ...state, 
        user: {...state.user, age: action.payload}
      };
    }
  return state;
  }
};